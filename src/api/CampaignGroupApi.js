/**
 * Cervinodata API documentation
 * <div style='margin: 2em 0;'>  <p>  Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>).  </p> <h3>To use the Cervinodata API, you need all of the following:</h3> <p> <ol> <li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li> <li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li> <li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li> <li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li> <li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li> </ol> </p> <p> Note that limits apply for <a href='https://support.cervinodata.com/hc/en-nl/articles/360009250458-Limits-for-Free-plan-users' target='_blank'>Free plan users</a>. </p> <p> If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>. </p> </div>
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cervinodata.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* CampaignGroup service.
* @module api/CampaignGroupApi
* @version 0.1.0
*/
export default class CampaignGroupApi {

    /**
    * Constructs a new CampaignGroupApi. 
    * @alias module:api/CampaignGroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCampaignGroupAdReportPerOrganisationPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupAdReportPerOrganisationPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group ad report per organisation per campaign per day
     * Campaign group ad report per organisation per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupAdReportPerOrganisationPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupAdReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupAdReportPerOrganisationPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-ad-report-per-organisation-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupAdReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupAdReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group ad report per organisation per day
     * Campaign group ad report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupAdReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupAdReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupAdReportPerOrganisationPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-ad-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupAnalyticsReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupAnalyticsReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group analytics report per organisation per day
     * Campaign group analytics report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupAnalyticsReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupAnalyticsReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupAnalyticsReportPerOrganisationPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-analytics-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group bing ads extended report per organisation per account per campaign per day
     * Campaign group bing ads extended report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupBingAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-bing-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group doubleclick bid manager report per organisation per account per campaign per day
     * Campaign group doubleclick bid manager report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupDoubleClickBidManagerReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-doubleclick-bid-manager-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group doubleclick campaign manager report per organisation per account per campaign per day
     * Campaign group doubleclick campaign manager report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupDoubleClickCampaignManagerReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-doubleclick-campaign-manager-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group facebook ad extended report per organisation per campaign per day
     * Campaign group facebook ad extended report per organisation per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-facebook-ad-extended-report-per-organisation-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group facebook ad report per organisation per campaign per day
     * Campaign group facebook ad report per organisation  per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-facebook-ad-report-per-organisation-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group google ads report per organisation per campaign per day
     * Campaign group google ads report per organisation  per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-google-ads-report-per-organisation-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group linkedin ads extended report per organisation per account per campaign per day
     * Campaign group linkedin ads extended report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group report per organisation per day
     * Campaign group report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupReportPerOrganisationPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group snapchat ads extended report per organisation per account per campaign per day
     * Campaign group snapchat ads extended report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupSnapchatAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-snapchat-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group twitter ads extended report per organisation per account per campaign per day
     * Campaign group twitter ads extended report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupTwitterAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-twitter-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupVideoReportPerOrganisationPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group video report per organisation per campaign per day
     * Campaign group video report per organisation per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupVideoReportPerOrganisationPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-video-report-per-organisation-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupVideoReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupVideoReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group video report per organisation per day
     * Campaign group video report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupVideoReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupVideoReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupVideoReportPerOrganisationPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/campaign-group-video-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
