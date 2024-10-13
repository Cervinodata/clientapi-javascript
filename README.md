# cervinodata-api-client

CervinodataApiClient - JavaScript client for cervinodata-api-client
<div style='margin: 2em 0;'>
<p>
Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>).
</p>
<h3>To use the Cervinodata API, you need all of the following:</h3>
<p>
<ol>
<li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li>
<li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li>
<li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li>
<li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li>
<li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li>
</ol>
</p>
<p>
Note that limits apply for <a href='https://support.cervinodata.com/hc/articles/360014265139' target='_blank'>Free plan users</a>.
</p>
<p>
If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>.
</p>
</div>
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.1.0
- Generator version: 7.10.0-SNAPSHOT
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cervinodata-api-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your cervinodata-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/cervinodata/javascript
then install it via:

```shell
    npm install cervinodata/javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CervinodataApiClient = require('cervinodata-api-client');

var defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new CervinodataApiClient.AdvertisingDataApi()
var organisationUuids = ["null"]; // {[String]} Organisation uuids
var opts = {
  'fromDate': new Date("2013-10-20"), // {Date} From date
  'dateFormat': "dateFormat_example", // {String} Outputted date format
  'format': "format_example" // {String} Output format (use csv for large result sets)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAdAccountReportPerOrganisationPerDay(organisationUuids, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.cervinodata.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CervinodataApiClient.AdvertisingDataApi* | [**getAdAccountReportPerOrganisationPerDay**](docs/AdvertisingDataApi.md#getAdAccountReportPerOrganisationPerDay) | **GET** /data/ad-account-report-per-organisation-per-day/{organisationUuids} | Return ad account report per organisation per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdAccounts**](docs/AdvertisingDataApi.md#getAdAccounts) | **GET** /data/ad-accounts/{organisationUuid} | Return ad accounts by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaignReportPerDay**](docs/AdvertisingDataApi.md#getAdCampaignReportPerDay) | **GET** /data/ad-campaign-report-per-day/{organisationUuid} | Return ad campaign report per day by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](docs/AdvertisingDataApi.md#getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/ad-campaign-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return ad campaign report per organisation per account per campaign per device per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaignReportPerOrganisationPerAccountPerDay**](docs/AdvertisingDataApi.md#getAdCampaignReportPerOrganisationPerAccountPerDay) | **GET** /data/ad-campaign-report-per-organisation-per-account-per-day/{organisationUuids} | Return ad campaign report per organisation per account per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaigns**](docs/AdvertisingDataApi.md#getAdCampaigns) | **GET** /data/ad-campaigns/{organisationUuid} | Return ad campaigns by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getAdGroups**](docs/AdvertisingDataApi.md#getAdGroups) | **GET** /data/ad-groups/{organisationUuid} | Return ad groups by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getAdformExtendedReportPerOrganisationPerAccountPerCampaignPerCreativePerDay**](docs/AdvertisingDataApi.md#getAdformExtendedReportPerOrganisationPerAccountPerCampaignPerCreativePerDay) | **GET** /data/adform-extended-report-per-organisation-per-account-per-campaign-per-creative-per-day/{organisationUuids} | Return adform extended report per organisation per account per campaign per creative per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdformExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getAdformExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/adform-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return adform extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdformExtendedReportPerOrganisationPerAccountPerCampaignPerLineItemPerDay**](docs/AdvertisingDataApi.md#getAdformExtendedReportPerOrganisationPerAccountPerCampaignPerLineItemPerDay) | **GET** /data/adform-extended-report-per-organisation-per-account-per-campaign-per-line-item-per-day/{organisationUuids} | Return adform extended report per organisation per account per campaign per line item per day
*CervinodataApiClient.AdvertisingDataApi* | [**getBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/bing-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return bing ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdCustomConversionReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getFacebookAdCustomConversionReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/facebook-ad-custom-conversion-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return facebook ad custom conversion report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDay**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDay) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-ad-group-per-day/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per ad group per day
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDayPlus**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDayPlus) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-ad-group-per-day-plus/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per ad group per day plus
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdPerDay**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdPerDay) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-ad-per-day/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per ad per day
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDayPlus**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDayPlus) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-day-plus/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per day plus
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per device per day
*CervinodataApiClient.AdvertisingDataApi* | [**getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](docs/AdvertisingDataApi.md#getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/google-ads-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return google ads report per organisation per account per campaign per device per day
*CervinodataApiClient.AdvertisingDataApi* | [**getHashedAdCampaignReportPerOrganisationPerAccountPerDay**](docs/AdvertisingDataApi.md#getHashedAdCampaignReportPerOrganisationPerAccountPerDay) | **GET** /data/hashed-ad-campaign-report-per-organisation-per-account-per-day/{organisationUuids} | Return hashed ad campaign report per organisation per account per day
*CervinodataApiClient.AdvertisingDataApi* | [**getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return linkedin ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getPinterestAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getPinterestAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/pinterest-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return pinterest ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/snapchat-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return snapchat ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getTikTokAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getTikTokAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/tiktok-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return tiktok ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AdvertisingDataApi* | [**getTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/twitter-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return twitter ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AnalyticsDataApi* | [**getGA4ReportPerChannelGroupPerOrganisationPerProperty**](docs/AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerOrganisationPerProperty) | **GET** /data/ga4-report-per-channel-group-per-organisation-per-property/{organisationUuids} | Return GA4 report per channel group per organisation per property
*CervinodataApiClient.AnalyticsDataApi* | [**getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth**](docs/AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-channel-group-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per organisation per property per month
*CervinodataApiClient.AnalyticsDataApi* | [**getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth**](docs/AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-channel-group-per-product-name-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per product name per organisation per property per month
*CervinodataApiClient.AnalyticsDataApi* | [**getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth**](docs/AnalyticsDataApi.md#getGA4ReportPerChannelGroupPerSourceMediumPerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-channel-group-per-source-medium-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per source medium per organisation per property per month
*CervinodataApiClient.AnalyticsDataApi* | [**getViews**](docs/AnalyticsDataApi.md#getViews) | **GET** /data/views/{organisationUuid} | Return views by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerCampaignPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerCampaignPerDay) | **GET** /data/analytics-report-per-campaign-per-day/{organisationUuid} | Return analytics report per campaign per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerChannelGroupPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerChannelGroupPerDay) | **GET** /data/analytics-report-per-channel-group-per-day/{organisationUuid} | Return analytics report per channel group per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay) | **GET** /data/analytics-report-per-device-per-channel-group-per-organisation-per-view-per-day/{organisationUuids} | Return analytics report per device per channel group per organisation per view per day
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerDevicePerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerDevicePerDay) | **GET** /data/analytics-report-per-device-per-day/{organisationUuid} | Return analytics report per device per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerSourceMediumPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerSourceMediumPerDay) | **GET** /data/analytics-report-per-source-medium-per-day/{organisationUuid} | Return analytics report per source medium per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getGA4ReportPerDevicePerChannelGroupPerOrganisationPerPropertyPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getGA4ReportPerDevicePerChannelGroupPerOrganisationPerPropertyPerDay) | **GET** /data/ga4-report-per-device-per-channel-group-per-organisation-per-property-per-day/{organisationUuids} | Return GA4 report per device per channel group per organisation per property per day
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerCampaignPerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerCampaignPerDay) | **GET** /data/analytics-goal-report-per-campaign-per-day/{organisationUuid} | Return analytics goal report per campaign per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerChannelGroupPerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerChannelGroupPerDay) | **GET** /data/analytics-goal-report-per-channel-group-per-day/{organisationUuid} | Return analytics goal report per channel group per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerDevicePerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerDevicePerDay) | **GET** /data/analytics-goal-report-per-device-per-day/{organisationUuid} | Return analytics goal report per device per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerSourceMediumPerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerSourceMediumPerDay) | **GET** /data/analytics-goal-report-per-source-medium-per-day/{organisationUuid} | Return analytics goal report per source medium per day by organisation
*CervinodataApiClient.AnalyticsDataProductMetricsApi* | [**getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek**](docs/AnalyticsDataProductMetricsApi.md#getGA4ReportPerProductNamePerOrganisationPerPropertyPerWeek) | **GET** /data/ga4-report-per-product-name-per-organisation-per-property-per-week/{organisationUuids} | Return GA4 report per product name per organisation per property per week
*CervinodataApiClient.AnalyticsDataProductMetricsApi* | [**getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek**](docs/AnalyticsDataProductMetricsApi.md#getGA4ReportPerProductSkuPerOrganisationPerPropertyPerWeek) | **GET** /data/ga4-report-per-product-sku-per-organisation-per-property-per-week/{organisationUuids} | Return GA4 report per product sku per organisation per property per week
*CervinodataApiClient.AnalyticsDataTransactionMetricsApi* | [**getGA4ReportPerCampaignPerOrganisationPerProperty**](docs/AnalyticsDataTransactionMetricsApi.md#getGA4ReportPerCampaignPerOrganisationPerProperty) | **GET** /data/ga4-report-per-campaign-per-organisation-per-property/{organisationUuids} | Return GA4 report per campaign per organisation per property
*CervinodataApiClient.AnalyticsDataTransactionMetricsApi* | [**getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth**](docs/AnalyticsDataTransactionMetricsApi.md#getGA4ReportPerCampaignPerOrganisationPerPropertyPerMonth) | **GET** /data/ga4-report-per-campaign-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per campaign per organisation per property per month
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group ad report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdReportPerOrganisationPerCampaignPerWeek**](docs/CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerCampaignPerWeek) | **GET** /data/campaign-group-ad-report-per-organisation-per-campaign-per-week/{organisationUuids} | Return campaign group ad report per organisation per campaign per week
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-day/{organisationUuids} | Return campaign group ad report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdformExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdformExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-adform-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group adform extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdformReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdformReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-adform-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group adform report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdformReportPerOrganisationPerCampaignPerLineItemPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdformReportPerOrganisationPerCampaignPerLineItemPerDay) | **GET** /data/campaign-group-adform-report-per-organisation-per-campaign-per-line-item-per-day/{organisationUuids} | Return campaign group adform report per organisation per campaign per line-item per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAnalyticsReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAnalyticsReportPerOrganisationPerDay) | **GET** /data/campaign-group-analytics-report-per-organisation-per-day/{organisationUuids} | Return campaign group analytics report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-bing-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group bing ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerCreativePerDay**](docs/CampaignGroupApi.md#getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerCreativePerDay) | **GET** /data/campaign-group-doubleclick-bid-manager-report-per-organisation-per-account-per-campaign-per-creative-per-day/{organisationUuids} | Return campaign group doubleclick bid manager report per organisation per account per campaign per creative per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-doubleclick-bid-manager-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group doubleclick bid manager report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-doubleclick-campaign-manager-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group doubleclick campaign manager report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdCustomConversionReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdCustomConversionReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-custom-conversion-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad custom conversion report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDay) | **GET** /data/campaign-group-facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-ad-group-per-day/{organisationUuids} | Return campaign group facebook ad extended report per organisation per account per campaign per ad group per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerAdPerDay) | **GET** /data/campaign-group-facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-ad-per-day/{organisationUuids} | Return campaign group facebook ad extended report per organisation per account per campaign per ad per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-extended-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad extended report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupGoalReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupGoalReportPerOrganisationPerDay) | **GET** /data/campaign-group-goal-report-per-organisation-per-day/{organisationUuids} | Return campaign group goal report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupGoogleAdsExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDay**](docs/CampaignGroupApi.md#getCampaignGroupGoogleAdsExtendedReportPerOrganisationPerAccountPerCampaignPerAdGroupPerDay) | **GET** /data/campaign-group-google-ads-extended-report-per-organisation-per-account-per-campaign-per-ad-group-per-day/{organisationUuids} | Return campaign group google ads extended report per organisation per account per campaign per ad group per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-google-ads-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group google ads report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group linkedin ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupPinterestAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupPinterestAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-pinterest-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group pinterest ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupReportPerOrganisationPerDay) | **GET** /data/campaign-group-report-per-organisation-per-day/{organisationUuids} | Return campaign group report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-snapchat-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group snapchat ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupTikTokAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupTikTokAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-tiktok-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group tiktok ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-twitter-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group twitter ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-video-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group video report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupVideoReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupVideoReportPerOrganisationPerDay) | **GET** /data/campaign-group-video-report-per-organisation-per-day/{organisationUuids} | Return campaign group video report per organisation per day
*CervinodataApiClient.GenericDataApi* | [**getCampaignGroups**](docs/GenericDataApi.md#getCampaignGroups) | **GET** /data/campaign-groups | Return campaign groups
*CervinodataApiClient.GenericDataApi* | [**getOrganisations**](docs/GenericDataApi.md#getOrganisations) | **GET** /data/organisations | Return organisations
*CervinodataApiClient.ProductDataApi* | [**getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0**](docs/ProductDataApi.md#getGA4ReportPerChannelGroupPerProductNamePerOrganisationPerPropertyPerMonth_0) | **GET** /data/ga4-report-per-channel-group-per-product-name-per-organisation-per-property-per-month/{organisationUuids} | Return GA4 report per channel group per product name per organisation per property per month


## Documentation for Models



## Documentation for Authorization


Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication

