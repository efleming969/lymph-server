"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const Glob = require("globby");
const FS = require("fs-extra");
exports.multiline = function (strings, ...args) {
    const whitespace = /^\s*|\n\s*$/g;
    const find_indent = /^[ \t\r]*\| (.*)$/gm;
    return strings.reduce(function (out, part, i) {
        if (args.hasOwnProperty(i)) {
            const lines = part.split('\n');
            // find indention of the current line
            const indent = lines[lines.length - 1].replace(/[ \t\r]*\| ([ \t\r]*).*$/, '$1');
            // indent interpolated lines to match
            const tail = (args[i] || '').split('\n').join('\n' + indent);
            return out + part + tail;
        }
        else {
            return out + part;
        }
    }, '').replace(whitespace, '').replace(find_indent, '$1');
};
exports.mapObject = function (fn, object) {
    return Object.keys(object).map(key => fn(key, object[key]));
};
exports.removeAllJSFiles = (dir) => function () {
    const js_pattern = Path.join(dir, "**", "*.js");
    return Glob(js_pattern).then(function (js_files) {
        return Promise.all(js_files.map(f => FS.remove(f)));
    });
};
exports.selectProps = (prop_names) => function (original_object) {
    return prop_names.reduce(function (obj, key) {
        return Object.assign({}, obj, original_object[key]);
    }, {});
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE0QjtBQUM1QiwrQkFBOEI7QUFDOUIsK0JBQThCO0FBRWpCLFFBQUEsU0FBUyxHQUFHLFVBQVcsT0FBTyxFQUFFLEdBQUcsSUFBSTtJQUVoRCxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUE7SUFDakMsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUE7SUFFekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUUsVUFBVyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDLENBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUNqQyxxQ0FBcUM7WUFDckMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUMsT0FBTyxDQUFFLDBCQUEwQixFQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3JGLHFDQUFxQztZQUNyQyxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFFLElBQUksR0FBRyxNQUFNLENBQUUsQ0FBQztZQUNuRSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBQyxPQUFPLENBQUUsVUFBVSxFQUFFLEVBQUUsQ0FBRSxDQUFDLE9BQU8sQ0FBRSxXQUFXLEVBQUUsSUFBSSxDQUFFLENBQUE7QUFDbEUsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsVUFBVyxFQUFFLEVBQUUsTUFBTTtJQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUUsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBRSxHQUFHLENBQUUsQ0FBRSxDQUFFLENBQUE7QUFDdkUsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxDQUFFLEdBQVcsRUFBRyxFQUFFLENBQUM7SUFDL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBRSxDQUFBO0lBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUUsVUFBVSxDQUFFLENBQUMsSUFBSSxDQUFFLFVBQVcsUUFBUTtRQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUUsQ0FBRSxDQUFFLENBQUE7SUFDN0QsQ0FBQyxDQUFFLENBQUE7QUFDUCxDQUFDLENBQUE7QUFFWSxRQUFBLFdBQVcsR0FBRyxDQUFFLFVBQW9CLEVBQUcsRUFBRSxDQUFDLFVBQVcsZUFBdUI7SUFDckYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUUsVUFBVyxHQUFHLEVBQUUsR0FBRztRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBRSxHQUFHLENBQUUsQ0FBRSxDQUFBO0lBQzNELENBQUMsRUFBRSxFQUFFLENBQUUsQ0FBQTtBQUNYLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0ICogYXMgR2xvYiBmcm9tIFwiZ2xvYmJ5XCJcbmltcG9ydCAqIGFzIEZTIGZyb20gXCJmcy1leHRyYVwiXG5cbmV4cG9ydCBjb25zdCBtdWx0aWxpbmUgPSBmdW5jdGlvbiAoIHN0cmluZ3MsIC4uLmFyZ3MgKSB7XG5cbiAgICBjb25zdCB3aGl0ZXNwYWNlID0gL15cXHMqfFxcblxccyokL2dcbiAgICBjb25zdCBmaW5kX2luZGVudCA9IC9eWyBcXHRcXHJdKlxcfCAoLiopJC9nbVxuXG4gICAgcmV0dXJuIHN0cmluZ3MucmVkdWNlKCBmdW5jdGlvbiAoIG91dCwgcGFydCwgaSApIHtcbiAgICAgICAgaWYgKCBhcmdzLmhhc093blByb3BlcnR5KCBpICkgKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHBhcnQuc3BsaXQoICdcXG4nICk7XG4gICAgICAgICAgICAvLyBmaW5kIGluZGVudGlvbiBvZiB0aGUgY3VycmVudCBsaW5lXG4gICAgICAgICAgICBjb25zdCBpbmRlbnQgPSBsaW5lc1sgbGluZXMubGVuZ3RoIC0gMSBdLnJlcGxhY2UoIC9bIFxcdFxccl0qXFx8IChbIFxcdFxccl0qKS4qJC8sICckMScgKTtcbiAgICAgICAgICAgIC8vIGluZGVudCBpbnRlcnBvbGF0ZWQgbGluZXMgdG8gbWF0Y2hcbiAgICAgICAgICAgIGNvbnN0IHRhaWwgPSAoYXJnc1sgaSBdIHx8ICcnKS5zcGxpdCggJ1xcbicgKS5qb2luKCAnXFxuJyArIGluZGVudCApO1xuICAgICAgICAgICAgcmV0dXJuIG91dCArIHBhcnQgKyB0YWlsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG91dCArIHBhcnQ7XG4gICAgICAgIH1cbiAgICB9LCAnJyApLnJlcGxhY2UoIHdoaXRlc3BhY2UsICcnICkucmVwbGFjZSggZmluZF9pbmRlbnQsICckMScgKVxufVxuXG5leHBvcnQgY29uc3QgbWFwT2JqZWN0ID0gZnVuY3Rpb24gKCBmbiwgb2JqZWN0ICkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyggb2JqZWN0ICkubWFwKCBrZXkgPT4gZm4oIGtleSwgb2JqZWN0WyBrZXkgXSApIClcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbEpTRmlsZXMgPSAoIGRpcjogc3RyaW5nICkgPT4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGpzX3BhdHRlcm4gPSBQYXRoLmpvaW4oIGRpciwgXCIqKlwiLCBcIiouanNcIiApXG5cbiAgICByZXR1cm4gR2xvYigganNfcGF0dGVybiApLnRoZW4oIGZ1bmN0aW9uICgganNfZmlsZXMgKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCgganNfZmlsZXMubWFwKCBmID0+IEZTLnJlbW92ZSggZiApICkgKVxuICAgIH0gKVxufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0UHJvcHMgPSAoIHByb3BfbmFtZXM6IHN0cmluZ1tdICkgPT4gZnVuY3Rpb24gKCBvcmlnaW5hbF9vYmplY3Q6IG9iamVjdCApIHtcbiAgICByZXR1cm4gcHJvcF9uYW1lcy5yZWR1Y2UoIGZ1bmN0aW9uICggb2JqLCBrZXkgKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKCB7fSwgb2JqLCBvcmlnaW5hbF9vYmplY3RbIGtleSBdIClcbiAgICB9LCB7fSApXG59XG5cblxuIl19