# CervinodataApiClient.AnalyticsDataProductMetricsApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek**](AnalyticsDataProductMetricsApi.md#getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek) | **GET** /data/ga4-report-per-product-name-per-organisation-per-property-per-week/{organisationUuids} | Return GA4 report per product name per organisation per property per week
[**getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek**](AnalyticsDataProductMetricsApi.md#getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek) | **GET** /data/ga4-report-per-product-sku-per-organisation-per-property-per-week/{organisationUuids} | Return GA4 report per product sku per organisation per property per week



## getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek

> String getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek(organisationUuids)

Return GA4 report per product name per organisation per property per week

GA4 report per product name per organisation per property per week

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataProductMetricsApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek(organisationUuids, (error, data, response) => {
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


## getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek

> String getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek(organisationUuids)

Return GA4 report per product sku per organisation per property per week

GA4 report per product sku per organisation per property per week

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataProductMetricsApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek(organisationUuids, (error, data, response) => {
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

