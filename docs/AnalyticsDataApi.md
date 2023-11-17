# CervinodataApiClient.AnalyticsDataApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGA4ReportPerChannelGroupPerOrganisationPerProperty**](AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerOrganisationPerProperty) | **GET** /data/ga4-report-per-channel-group-per-organisation-per-property/{organisationUuids} | Return GA4 report per channel group per organisation per property
[**getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth**](AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-channel-group-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per organisation per property per month
[**getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth**](AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-channel-group-per-product-name-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per product name per organisation per property per month
[**getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth**](AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-channel-group-per-source-medium-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per source medium per organisation per property per month
[**getViews**](AnalyticsDataApi.md#getViews) | **GET** /data/views/{organisationUuid} | Return views by organisation



## getGA4ReportPerChannelGroupPerOrganisationPerProperty

> String getGA4ReportPerChannelGroupPerOrganisationPerProperty(organisationUuids)

Return GA4 report per channel group per organisation per property

GA4 report per channel group per organisation per property

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerChannelGroupPerOrganisationPerProperty(organisationUuids, (error, data, response) => {
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

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth

> String getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth(organisationUuids)

Return GA4 report per channel group per organisation per property per month

GA4 report per channel group per organisation per property per month

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth(organisationUuids, (error, data, response) => {
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

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth

> String getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth(organisationUuids)

Return GA4 report per channel group per product name per organisation per property per month

GA4 report per channel group per product name per organisation per property per month

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth(organisationUuids, (error, data, response) => {
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

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth

> String getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth(organisationUuids)

Return GA4 report per channel group per source medium per organisation per property per month

GA4 report per channel group per source medium per organisation per property per month

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth(organisationUuids, (error, data, response) => {
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

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv


## getViews

> String getViews(organisationUuid, opts)

Return views by organisation

Views by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'format': "format_example" // String | Output format
};
apiInstance.getViews(organisationUuid, opts, (error, data, response) => {
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
 **format** | **String**| Output format | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

