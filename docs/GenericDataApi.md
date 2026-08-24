# CervinodataApiClient.GenericDataApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganisation**](GenericDataApi.md#createOrganisation) | **POST** /data/organisations | Create an organisation
[**deleteOrganisation**](GenericDataApi.md#deleteOrganisation) | **DELETE** /data/organisations/{organisationUuid} | Delete an organisation
[**getCampaignGroups**](GenericDataApi.md#getCampaignGroups) | **GET** /data/campaign-groups | Return campaign groups
[**getOrganisations**](GenericDataApi.md#getOrganisations) | **GET** /data/organisations | Return organisations
[**updateOrganisation**](GenericDataApi.md#updateOrganisation) | **PUT** /data/organisations/{organisationUuid} | Update an organisation



## createOrganisation

> Object createOrganisation(createOrganisationRequest)

Create an organisation

Create a new organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.GenericDataApi();
let createOrganisationRequest = new CervinodataApiClient.CreateOrganisationRequest(); // CreateOrganisationRequest | 
apiInstance.createOrganisation(createOrganisationRequest, (error, data, response) => {
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
 **createOrganisationRequest** | [**CreateOrganisationRequest**](CreateOrganisationRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganisation

> deleteOrganisation(organisationUuid)

Delete an organisation

Delete an organisation. Accounts belonging to the organisation are reassigned to the default organisation. The default organisation itself cannot be deleted.

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.GenericDataApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
apiInstance.deleteOrganisation(organisationUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationUuid** | **String**| Organisation uuid | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCampaignGroups

> [Object] getCampaignGroups()

Return campaign groups

campaign groups

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
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
import CervinodataApiClient from 'cervinodata-api-client';
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


## updateOrganisation

> Object updateOrganisation(organisationUuid, createOrganisationRequest)

Update an organisation

Update an existing organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.GenericDataApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let createOrganisationRequest = new CervinodataApiClient.CreateOrganisationRequest(); // CreateOrganisationRequest | 
apiInstance.updateOrganisation(organisationUuid, createOrganisationRequest, (error, data, response) => {
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
 **createOrganisationRequest** | [**CreateOrganisationRequest**](CreateOrganisationRequest.md)|  | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

