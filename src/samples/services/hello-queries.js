"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = function (api_gateway_request, context, sendBackToGateway) {
    const statusCode = 200;
    const body = JSON.stringify({ text: "GoGo, Gadget World" });
    const headers = {};
    sendBackToGateway(null, { statusCode, body, headers });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8tcXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvLXF1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLE9BQU8sR0FBRyxVQUFXLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxpQkFBaUI7SUFDN0UsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFBO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsQ0FBRSxDQUFBO0lBQzdELE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQTtJQUVsQixpQkFBaUIsQ0FBRSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFFLENBQUE7QUFDNUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoIGFwaV9nYXRld2F5X3JlcXVlc3QsIGNvbnRleHQsIHNlbmRCYWNrVG9HYXRld2F5ICkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSAyMDBcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHsgdGV4dDogXCJHb0dvLCBHYWRnZXQgV29ybGRcIiB9IClcbiAgICBjb25zdCBoZWFkZXJzID0ge31cblxuICAgIHNlbmRCYWNrVG9HYXRld2F5KCBudWxsLCB7IHN0YXR1c0NvZGUsIGJvZHksIGhlYWRlcnMgfSApXG59XG4iXX0=