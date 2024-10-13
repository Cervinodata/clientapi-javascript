# CervinodataApiClient.ProductDataApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0**](ProductDataApi.md#getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0) | **GET** /data/ga4-report-per-channel-group-per-product-name-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per product name per organisation per property per month



## getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0

> String getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0(organisationUuids)

Return GA4 report per channel group per product name per organisation per property per month

GA4 report per channel group per product name per organisation per property per month

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.ProductDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
apiInstance.getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0(organisationUuids, (error, data, response) => {
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

