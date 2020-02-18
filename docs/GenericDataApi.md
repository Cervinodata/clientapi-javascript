# CervinodataApiClient.GenericDataApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCampaignGroups**](GenericDataApi.md#getCampaignGroups) | **GET** /data/campaign-groups | Return campaign groups
[**getOrganisations**](GenericDataApi.md#getOrganisations) | **GET** /data/organisations | Return organisations



## getCampaignGroups

> [Object] getCampaignGroups()

Return campaign groups

campaign groups

### Example

```javascript
import CervinodataApiClient from 'Cervinodata API Client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.GenericDataApi();
apiInstance.getCampaignGroups((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganisations

> String getOrganisations(opts)

Return organisations

organisations

### Example

```javascript
import CervinodataApiClient from 'Cervinodata API Client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.GenericDataApi();
let opts = {
  'format': "format_example" // String | Output format
};
apiInstance.getOrganisations(opts, (error, data, response) => {
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
 **format** | **String**| Output format | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

