import * as Typescript from "typescript"
import * as Path from "path"
import * as Glob from "globby"
import * as FS from "fs-extra"

import { Config } from "./index"

export type ScriptOptions = {
    name: string,
    directory: string
}

export const render = function ( options: ScriptOptions ) {
    const source_file = Path.join( options.directory, `${ options.name }.ts` )
    const import_regex = /import .* from "(\.{1,2}\/[a-zA-Z\-]*)"/g

    return FS.readFile( source_file, "utf8" ).then( function ( typescript_source ) {
        const result = Typescript.transpileModule( typescript_source, {
            compilerOptions: {
                module: Typescript.ModuleKind.ES2015,
                inlineSources: true,
                inlineSourceMap: true
            },
            fileName: source_file
        } )
        return result.outputText.replace( import_regex, function ( match, p1 ) {
            return match.replace( p1, p1 + ".js" )
        } )
    } )
}

export const compile = ( config: Config ) => function ( typescript_files: string[] ): Promise<string[]> {
    const compile_options = {
        noEmitOnError: true,
        noImplicitAny: false,
        target: Typescript.ScriptTarget.ES2015,
        module: Typescript.ModuleKind.ES2015,
        moduleResolution: Typescript.ModuleResolutionKind.NodeJs,
        outDir: Path.join( config.target, "scripts" )
    }

    const program = Typescript.createProgram( typescript_files, compile_options )

    return new Promise( function ( resolve, reject ) {
        const emitResult = program.emit()

        const allDiagnostics = Typescript.getPreEmitDiagnostics( program )
            .concat( emitResult.diagnostics )

        const results = allDiagnostics.map( function ( diagnostic ) {
            if ( diagnostic.file ) {
                let { line, character } =
                    diagnostic.file.getLineAndCharacterOfPosition( diagnostic.start )

                let message =
                    Typescript.flattenDiagnosticMessageText( diagnostic.messageText, '\n' )

                return `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`
            }
            else {
                return `${Typescript.flattenDiagnosticMessageText( diagnostic.messageText, '\n' )}`
            }
        } )

        results.length > 0 ? reject( results ) : resolve( typescript_files )
    } )
}

const filterOutTests = function ( files: string[] ): string[] {
    return files.filter( file => !file.endsWith( "tests.ts" ) )
}

export const build = function ( config: Config ) {
    const typescript_file_pattern = Path.join( config.source, "scripts", "**", "*.ts" )

    return FS.ensureDir( Path.join( config.target, "scripts" ) )
        .then( () => Glob( typescript_file_pattern ) )
        .then( filterOutTests )
        .then( compile( config ) )
        .then( () => config )
}