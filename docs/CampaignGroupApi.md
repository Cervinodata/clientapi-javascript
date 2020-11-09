# CervinodataApiClient.CampaignGroupApi

All URIs are relative to *https://app.cervinodata.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCampaignGroupAdReportPerOrganisationPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group ad report per organisation per campaign per day
[**getCampaignGroupAdReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-day/{organisationUuids} | Return campaign group ad report per organisation per day
[**getCampaignGroupAnalyticsReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupAnalyticsReportPerOrganisationPerDay) | **GET** /data/campaign-group-analytics-report-per-organisation-per-day/{organisationUuids} | Return campaign group analytics report per organisation per day
[**getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-bing-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group bing ads extended report per organisation per account per campaign per day
[**getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-extended-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad extended report per organisation per campaign per day
[**getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad report per organisation per campaign per day
[**getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-google-ads-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group google ads report per organisation per campaign per day
[**getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group linkedin ads extended report per organisation per account per campaign per day
[**getCampaignGroupReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupReportPerOrganisationPerDay) | **GET** /data/campaign-group-report-per-organisation-per-day/{organisationUuids} | Return campaign group report per organisation per day
[**getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-snapchat-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group snapchat ads extended report per organisation per account per campaign per day
[**getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-twitter-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group twitter ads extended report per organisation per account per campaign per day
[**getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay**](CampaignGroupApi.md#getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-video-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group video report per organisation per campaign per day
[**getCampaignGroupVideoReportPerOrganisationPerDay**](CampaignGroupApi.md#getCampaignGroupVideoReportPerOrganisationPerDay) | **GET** /data/campaign-group-video-report-per-organisation-per-day/{organisationUuids} | Return campaign group video report per organisation per day



## getCampaignGroupAdReportPerOrganisationPerCampaignPerDay

> String getCampaignGroupAdReportPerOrganisationPerCampaignPerDay(organisationUuids, opts)

Return campaign group ad report per organisation per campaign per day

Campaign group ad report per organisation per campaign per day

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
apiInstance.getCampaignGroupAdReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay

> String getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts)

Return campaign group bing ads extended report per organisation per account per campaign per day

Campaign group bing ads extended report per organisation per account per campaign per day

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
apiInstance.getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay

> String getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay(organisationUuids, opts)

Return campaign group facebook ad extended report per organisation per campaign per day

Campaign group facebook ad extended report per organisation per campaign per day

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
apiInstance.getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay

> String getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay(organisationUuids, opts)

Return campaign group facebook ad report per organisation per campaign per day

Campaign group facebook ad report per organisation  per campaign per day

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
apiInstance.getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay

> String getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay(organisationUuids, opts)

Return campaign group google ads report per organisation per campaign per day

Campaign group google ads report per organisation  per campaign per day

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
apiInstance.getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay

> String getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts)

Return campaign group linkedin ads extended report per organisation per account per campaign per day

Campaign group linkedin ads extended report per organisation per account per campaign per day

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
apiInstance.getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay

> String getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts)

Return campaign group snapchat ads extended report per organisation per account per campaign per day

Campaign group snapchat ads extended report per organisation per account per campaign per day

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
apiInstance.getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay

> String getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts)

Return campaign group twitter ads extended report per organisation per account per campaign per day

Campaign group twitter ads extended report per organisation per account per campaign per day

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
apiInstance.getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay

> String getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay(organisationUuids, opts)

Return campaign group video report per organisation per campaign per day

Campaign group video report per organisation per campaign per day

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
apiInstance.getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, (error, data, response) => {
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


## getCampaignGroupVideoReportPerOrganisationPerDay

> String getCampaignGroupVideoReportPerOrganisationPerDay(organisationUuids, opts)

Return campaign group video report per organisation per day

Campaign group video report per organisation per day

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
apiInstance.getCampaignGroupVideoReportPerOrganisationPerDay(organisationUuids, opts, (error, data, response) => {
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

