"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const Lambda_1 = require("./common/Lambda");
exports.handler = function (api_gateway_request, context, sendBackToGateway) {
    const request = Lambda_1.parseApiGatewayRequest(api_gateway_request);
    const s3 = new aws_sdk_1.S3({ region: "us-east-1" });
    s3.listBuckets(function (error, data) {
        console.log(data);
        console.log(request);
        const statusCode = 200;
        const body = JSON.stringify({ text: "Whatup, World!" });
        const headers = {};
        sendBackToGateway(null, { statusCode, body, headers });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tY29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxsby1jb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE0QjtBQUM1Qiw0Q0FBd0Q7QUFFM0MsUUFBQSxPQUFPLEdBQUcsVUFBVyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsaUJBQWlCO0lBQzdFLE1BQU0sT0FBTyxHQUFHLCtCQUFzQixDQUFFLG1CQUFtQixDQUFFLENBQUE7SUFFN0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFFLENBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUUsQ0FBQTtJQUU1QyxFQUFFLENBQUMsV0FBVyxDQUFFLFVBQVcsS0FBSyxFQUFFLElBQUk7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBRSxDQUFBO1FBRXRCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLENBQUUsQ0FBQTtRQUN6RCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUE7UUFFbEIsaUJBQWlCLENBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBRSxDQUFBO0lBQzVELENBQUMsQ0FBRSxDQUFBO0FBQ1AsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUzMgfSBmcm9tIFwiYXdzLXNka1wiXG5pbXBvcnQgeyBwYXJzZUFwaUdhdGV3YXlSZXF1ZXN0IH0gZnJvbSBcIi4vY29tbW9uL0xhbWJkYVwiXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCBhcGlfZ2F0ZXdheV9yZXF1ZXN0LCBjb250ZXh0LCBzZW5kQmFja1RvR2F0ZXdheSApIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gcGFyc2VBcGlHYXRld2F5UmVxdWVzdCggYXBpX2dhdGV3YXlfcmVxdWVzdCApXG5cbiAgICBjb25zdCBzMyA9IG5ldyBTMyggeyByZWdpb246IFwidXMtZWFzdC0xXCIgfSApXG5cbiAgICBzMy5saXN0QnVja2V0cyggZnVuY3Rpb24gKCBlcnJvciwgZGF0YSApIHtcbiAgICAgICAgY29uc29sZS5sb2coIGRhdGEgKVxuICAgICAgICBjb25zb2xlLmxvZyggcmVxdWVzdCApXG5cbiAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9IDIwMFxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHsgdGV4dDogXCJXaGF0dXAsIFdvcmxkIVwiIH0gKVxuICAgICAgICBjb25zdCBoZWFkZXJzID0ge31cblxuICAgICAgICBzZW5kQmFja1RvR2F0ZXdheSggbnVsbCwgeyBzdGF0dXNDb2RlLCBib2R5LCBoZWFkZXJzIH0gKVxuICAgIH0gKVxufVxuIl19