# CervinodataApiClient.AnalyticsDataGoalsApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnalyticsGoalReportPerCampaignPerDay**](AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerCampaignPerDay) | **GET** /data/analytics-goal-report-per-campaign-per-day/{organisationUuid} | Return analytics goal report per campaign per day by organisation
[**getAnalyticsGoalReportPerChannelGroupPerDay**](AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerChannelGroupPerDay) | **GET** /data/analytics-goal-report-per-channel-group-per-day/{organisationUuid} | Return analytics goal report per channel group per day by organisation
[**getAnalyticsGoalReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay**](AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay) | **GET** /data/analytics-goal-report-per-device-per-channel-group-per-organisation-per-view-per-day/{organisationUuids} | Return analytics goal report per device per channel group per organisation per view per day
[**getAnalyticsGoalReportPerDevicePerDay**](AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerDevicePerDay) | **GET** /data/analytics-goal-report-per-device-per-day/{organisationUuid} | Return analytics goal report per device per day by organisation
[**getAnalyticsGoalReportPerSourceMediumPerDay**](AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerSourceMediumPerDay) | **GET** /data/analytics-goal-report-per-source-medium-per-day/{organisationUuid} | Return analytics goal report per source medium per day by organisation



## getAnalyticsGoalReportPerCampaignPerDay

> String getAnalyticsGoalReportPerCampaignPerDay(organisationUuid, opts)

Return analytics goal report per campaign per day by organisation

Analytics goal report per campaign per day by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataGoalsApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAnalyticsGoalReportPerCampaignPerDay(organisationUuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationUuid** | **String**| Organisation uuid | 
 **fromDate** | **Date**| From date | [optional] 
 **dateFormat** | **String**| Outputted date format | [optional] 
 **format** | **String**| Output format (use csv for large result sets) | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## getAnalyticsGoalReportPerChannelGroupPerDay

> String getAnalyticsGoalReportPerChannelGroupPerDay(organisationUuid, opts)

Return analytics goal report per channel group per day by organisation

Analytics goal report per channel group per day by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataGoalsApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAnalyticsGoalReportPerChannelGroupPerDay(organisationUuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationUuid** | **String**| Organisation uuid | 
 **fromDate** | **Date**| From date | [optional] 
 **dateFormat** | **String**| Outputted date format | [optional] 
 **format** | **String**| Output format (use csv for large result sets) | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## getAnalyticsGoalReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay

> String getAnalyticsGoalReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay(organisationUuids, opts)

Return analytics goal report per device per channel group per organisation per view per day

Analytics goal report per device per channel group per organisation per view per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataGoalsApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAnalyticsGoalReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay(organisationUuids, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationUuids** | [**[String]**](String.md)| Organisation uuids | 
 **fromDate** | **Date**| From date | [optional] 
 **dateFormat** | **String**| Outputted date format | [optional] 
 **format** | **String**| Output format (use csv for large result sets) | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## getAnalyticsGoalReportPerDevicePerDay

> String getAnalyticsGoalReportPerDevicePerDay(organisationUuid, opts)

Return analytics goal report per device per day by organisation

Analytics goal report per device per day by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataGoalsApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAnalyticsGoalReportPerDevicePerDay(organisationUuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationUuid** | **String**| Organisation uuid | 
 **fromDate** | **Date**| From date | [optional] 
 **dateFormat** | **String**| Outputted date format | [optional] 
 **format** | **String**| Output format (use csv for large result sets) | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## getAnalyticsGoalReportPerSourceMediumPerDay

> String getAnalyticsGoalReportPerSourceMediumPerDay(organisationUuid, opts)

Return analytics goal report per source medium per day by organisation

Analytics goal report per source medium per day by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataGoalsApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAnalyticsGoalReportPerSourceMediumPerDay(organisationUuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationUuid** | **String**| Organisation uuid | 
 **fromDate** | **Date**| From date | [optional] 
 **dateFormat** | **String**| Outputted date format | [optional] 
 **format** | **String**| Output format (use csv for large result sets) | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

