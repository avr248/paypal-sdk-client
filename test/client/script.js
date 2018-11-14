/* @flow */

import { getClientID, getIntent, getCurrency, getVault, getCommit, getClientToken, getPartnerAttributionID, getMerchantID, getStageHost, getAPIStageHost } from '../../src';

import { createSDKScript } from './common';

describe(`script cases`, () => {
    it('should successfully get a client id', () => {
        const clientID = 'foobar123';

        let url = createSDKScript({
            query: {
                'client-id': clientID
            }
        });

        if (clientID !== getClientID()) {
            throw new Error(`Expected client id to be ${ clientID }, got ${ getClientID() } from ${ url }`);
        }
    });

    it('should error out when client id not passed', () => {

        let error;
        
        createSDKScript({
            query: {
                'client-id': ''
            }
        });

        try {
            getClientID();
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });

    it('should successfully get a client id alias', () => {
        const clientID = 'sb';

        let url = createSDKScript({
            query: {
                'client-id': clientID
            }
        });

        if (clientID === getClientID()) {
            throw new Error(`Expected client id to not be ${ clientID }, got ${ url }`);
        }
    });

    it('should successfully get a client id', () => {
        const merchantID = 'abc987';

        let url = createSDKScript({
            query: {
                'merchant-id': merchantID
            }
        });

        if (merchantID !== getMerchantID()) {
            throw new Error(`Expected merchant id to be ${ merchantID }, got ${ getMerchantID() || 'undefined' } from ${ url }`);
        }
    });

    it('should successfully get an intent', () => {
        const intent = 'authorize';

        let url = createSDKScript({
            query: {
                'order-intent': intent
            }
        });

        if (intent !== getIntent()) {
            throw new Error(`Expected intent to be ${ intent }, got ${ getIntent() } from ${ url }`);
        }
    });

    it('should successfully get a currency', () => {
        const currency = 'EUR';

        let url = createSDKScript({
            query: {
                'order-currency': currency
            }
        });

        if (currency !== getCurrency()) {
            throw new Error(`Expected currency to be ${ currency }, got ${ getCurrency() } from ${ url }`);
        }
    });

    it('should successfully get vault', () => {
        const vault = true;

        let url = createSDKScript({
            query: {
                'order-vault': vault.toString()
            }
        });

        if (vault !== getVault()) {
            throw new Error(`Expected vault to be ${ vault.toString() }, got ${ getVault().toString() } from ${ url }`);
        }
    });

    it('should successfully get commit', () => {
        const commit = false;

        let url = createSDKScript({
            query: {
                'order-commit': commit.toString()
            }
        });

        if (commit !== getCommit()) {
            throw new Error(`Expected vault to be ${ commit.toString() }, got ${ getCommit().toString() } from ${ url }`);
        }
    });

    it('should successfully get client token', () => {
        const clientToken = 'abc-xyz-123';

        let url = createSDKScript({
            attributes: {
                'data-client-token': clientToken
            }
        });

        if (clientToken !== getClientToken()) {
            throw new Error(`Expected client token to be ${ clientToken }, got ${ getClientToken() } from ${ url }`);
        }
    });

    it('should error out when client token not passed', () => {

        let error;

        try {
            getClientToken();
        } catch (err) {
            error = err;
        }

        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });

    it('should successfully get partner attribution id', () => {
        const partnerAttributionID = 'abc-xyz-123';

        let url = createSDKScript({
            attributes: {
                'data-partner-attribution-id': partnerAttributionID
            }
        });

        if (partnerAttributionID !== getPartnerAttributionID()) {
            throw new Error(`Expected client token to be ${ partnerAttributionID }, got ${ getPartnerAttributionID() || 'undefined' } from ${ url }`);
        }
    });

    it('should successfully get stage host', () => {
        const stageHost = 'foo.qa.paypal.com';

        let url = createSDKScript({
            attributes: {
                'data-stage-host': stageHost
            }
        });

        if (stageHost !== getStageHost()) {
            throw new Error(`Expected client token to be ${ stageHost }, got ${ getStageHost() || 'undefined' } from ${ url }`);
        }
    });

    it('should successfully get api stage host', () => {
        const apiStageHost = 'bar.qa.paypal.com';

        let url = createSDKScript({
            attributes: {
                'data-stage-host': apiStageHost
            }
        });

        if (apiStageHost !== getAPIStageHost()) {
            throw new Error(`Expected client token to be ${ apiStageHost }, got ${ getAPIStageHost() || 'undefined' } from ${ url }`);
        }
    });
});
