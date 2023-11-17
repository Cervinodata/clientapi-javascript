# CervinodataApiClient.AnalyticsDataTransactionMetricsApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGA4ReportPerCampaignPerOrganisationPerProperty**](AnalyticsDataTransactionMetricsApi.md#getGA4ReportPerCampaignPerOrganisationPerProperty) | **GET** /data/ga4-report-per-campaign-per-organisation-per-property/{organisationUuids} | Return GA4 report per campaign per organisation per property
[**getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth**](AnalyticsDataTransactionMetricsApi.md#getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-campaign-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per campaign per organisation per property per month



## getGA4ReportPerCampaignPerOrganisationPerProperty

> String getGA4ReportPerCampaignPerOrganisationPerProperty(organisationUuids)

Return GA4 report per campaign per organisation per property

GA4 report per campaign per organisation per property

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataTransactionMetricsApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerCampaignPerOrganisationPerProperty(organisationUuids, (error, data, response) => {
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


## getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth

> String getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth(organisationUuids)

Return GA4 report per campaign per organisation per property per month

GA4 report per campaign per organisation per property per month

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AnalyticsDataTransactionMetricsApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth(organisationUuids, (error, data, response) => {
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

