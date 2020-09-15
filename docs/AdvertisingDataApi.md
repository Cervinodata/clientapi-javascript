# CervinodataApiClient.AdvertisingDataApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdAccountReportPerOrganisationPerDay**](AdvertisingDataApi.md#getAdAccountReportPerOrganisationPerDay) | **GET** /data/ad-account-report-per-organisation-per-day/{organisationUuids} | Return ad account report per organisation per day
[**getAdAccounts**](AdvertisingDataApi.md#getAdAccounts) | **GET** /data/ad-accounts/{organisationUuid} | Return ad accounts by organisation
[**getAdCampaignReportPerDay**](AdvertisingDataApi.md#getAdCampaignReportPerDay) | **GET** /data/ad-campaign-report-per-day/{organisationUuid} | Return ad campaign report per day by organisation
[**getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](AdvertisingDataApi.md#getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/ad-campaign-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return ad campaign report per organisation per account per campaign per device per day
[**getAdCampaignReportPerOrganisationPerAccountPerDay**](AdvertisingDataApi.md#getAdCampaignReportPerOrganisationPerAccountPerDay) | **GET** /data/ad-campaign-report-per-organisation-per-account-per-day/{organisationUuids} | Return ad campaign report per organisation per account per day
[**getAdCampaigns**](AdvertisingDataApi.md#getAdCampaigns) | **GET** /data/ad-campaigns/{organisationUuid} | Return ad campaigns by organisation
[**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per device per day
[**getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](AdvertisingDataApi.md#getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/google-ads-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return google ads report per organisation per account per campaign per device per day
[**getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](AdvertisingDataApi.md#getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return linkedin ads extended report per organisation per account per campaign per day



## getAdAccountReportPerOrganisationPerDay

> String getAdAccountReportPerOrganisationPerDay(organisationUuids, opts)

Return ad account report per organisation per day

Ad account report per organisation  per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAdAccountReportPerOrganisationPerDay(organisationUuids, opts, (error, data, response) => {
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


## getAdAccounts

> String getAdAccounts(organisationUuid, opts)

Return ad accounts by organisation

Ad accounts by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'format': "format_example" // String | Output format
};
apiInstance.getAdAccounts(organisationUuid, opts, (error, data, response) => {
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


## getAdCampaignReportPerDay

> String getAdCampaignReportPerDay(organisationUuid, opts)

Return ad campaign report per day by organisation

Ad campaign report per day by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAdCampaignReportPerDay(organisationUuid, opts, (error, data, response) => {
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


## getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay

> String getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts)

Return ad campaign report per organisation per account per campaign per device per day

Ad campaign report per organisation per account per campaign per device per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts, (error, data, response) => {
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


## getAdCampaignReportPerOrganisationPerAccountPerDay

> String getAdCampaignReportPerOrganisationPerAccountPerDay(organisationUuids, opts)

Return ad campaign report per organisation per account per day

Ad campaign report per organisation per account per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getAdCampaignReportPerOrganisationPerAccountPerDay(organisationUuids, opts, (error, data, response) => {
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


## getAdCampaigns

> String getAdCampaigns(organisationUuid, opts)

Return ad campaigns by organisation

Ad campaigns by organisation

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuid = "organisationUuid_example"; // String | Organisation uuid
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'format': "format_example" // String | Output format
};
apiInstance.getAdCampaigns(organisationUuid, opts, (error, data, response) => {
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
 **format** | **String**| Output format | [optional] 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay

> String getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts)

Return facebook ad extended report per organisation per account per campaign per device per day

Facebook ad extended report per organisation per account per campaign per device per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts, (error, data, response) => {
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


## getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay

> String getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts)

Return google ads report per organisation per account per campaign per device per day

Campaign group google ads report per organisation per account per campaign per device per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts, (error, data, response) => {
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


## getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay

> String getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts)

Return linkedin ads extended report per organisation per account per campaign per day

Linkedin ads extended report per organisation per account per campaign per day

### Example

```javascript
import CervinodataApiClient from 'cervinodata-api-client';
let defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CervinodataApiClient.AdvertisingDataApi();
let organisationUuids = ["null"]; // [String] | Organisation uuids
let opts = {
  'fromDate': new Date("2013-10-20"), // Date | From date
  'dateFormat': "dateFormat_example", // String | Outputted date format
  'format': "format_example" // String | Output format (use csv for large result sets)
};
apiInstance.getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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

