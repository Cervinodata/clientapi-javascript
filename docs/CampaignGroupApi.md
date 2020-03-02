# CervinodataApiClient.CampaignGroupApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCampaignGroupAdReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-day/{organisationUuids} | Return campaign group ad report per organisation per day
[**getCampaignGroupAnalyticsReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupAnalyticsReportPerOrganisationPerDay) | **GET** /data/campaign-group-analytics-report-per-organisation-per-day/{organisationUuids} | Return campaign group analytics report per organisation per day
[**getCampaignGroupReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupReportPerOrganisationPerDay) | **GET** /data/campaign-group-report-per-organisation-per-day/{organisationUuids} | Return campaign group report per organisation per day



## getCampaignGroupAdReportPerOrganisationPerDay

> String getCampaignGroupAdReportPerOrganisationPerDay(organisationUuids, opts)

Return campaign group ad report per organisation per day

Campaign group ad report per organisation per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.CampaignGroupApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getCampaignGroupAdReportPerOrganisationPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupAnalyticsReportPerOrganisationPerDay

> String getCampaignGroupAnalyticsReportPerOrganisationPerDay(organisationUuids, opts)

Return campaign group analytics report per organisation per day

Campaign group analytics report per organisation per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.CampaignGroupApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getCampaignGroupAnalyticsReportPerOrganisationPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupReportPerOrganisationPerDay

> String getCampaignGroupReportPerOrganisationPerDay(organisationUuids, opts)

Return campaign group report per organisation per day

Campaign group report per organisation per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.CampaignGroupApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getCampaignGroupReportPerOrganisationPerDay(organisationUuids, opts, (error, data, response) => {
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

