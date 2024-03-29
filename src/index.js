/**
 * Cervinodata API documentation
 * <div style='margin: 2em 0;'> <p> Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>). </p> <h3>To use the Cervinodata API, you need all of the following:</h3> <p> <ol> <li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li> <li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li> <li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li> <li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li> <li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li> </ol> </p> <p> Note that limits apply for <a href='https://support.cervinodata.com/hc/articles/360014265139' target='_blank'>Free plan users</a>. </p> <p> If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>. </p> </div>
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cervinodata.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AdvertisingDataApi from './api/AdvertisingDataApi';
import AnalyticsDataApi from './api/AnalyticsDataApi';
import AnalyticsDataDefaultMetricsApi from './api/AnalyticsDataDefaultMetricsApi';
import AnalyticsDataGoalsApi from './api/AnalyticsDataGoalsApi';
import AnalyticsDataProductMetricsApi from './api/AnalyticsDataProductMetricsApi';
import AnalyticsDataTransactionMetricsApi from './api/AnalyticsDataTransactionMetricsApi';
import CampaignGroupApi from './api/CampaignGroupApi';
import GenericDataApi from './api/GenericDataApi';
import ProductDataApi from './api/ProductDataApi';


/**
* A client library for the Cervinodata API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CervinodataApiClient = require('index'); // See note below*.
* var xxxSvc = new CervinodataApiClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CervinodataApiClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new CervinodataApiClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CervinodataApiClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
    * The AdvertisingDataApi service constructor.
    * @property {module:api/AdvertisingDataApi}
    */
    AdvertisingDataApi,

    /**
    * The AnalyticsDataApi service constructor.
    * @property {module:api/AnalyticsDataApi}
    */
    AnalyticsDataApi,

    /**
    * The AnalyticsDataDefaultMetricsApi service constructor.
    * @property {module:api/AnalyticsDataDefaultMetricsApi}
    */
    AnalyticsDataDefaultMetricsApi,

    /**
    * The AnalyticsDataGoalsApi service constructor.
    * @property {module:api/AnalyticsDataGoalsApi}
    */
    AnalyticsDataGoalsApi,

    /**
    * The AnalyticsDataProductMetricsApi service constructor.
    * @property {module:api/AnalyticsDataProductMetricsApi}
    */
    AnalyticsDataProductMetricsApi,

    /**
    * The AnalyticsDataTransactionMetricsApi service constructor.
    * @property {module:api/AnalyticsDataTransactionMetricsApi}
    */
    AnalyticsDataTransactionMetricsApi,

    /**
    * The CampaignGroupApi service constructor.
    * @property {module:api/CampaignGroupApi}
    */
    CampaignGroupApi,

    /**
    * The GenericDataApi service constructor.
    * @property {module:api/GenericDataApi}
    */
    GenericDataApi,

    /**
    * The ProductDataApi service constructor.
    * @property {module:api/ProductDataApi}
    */
    ProductDataApi
};
