import axios from 'axios';

export async function makeCalltwo(phNumber: string): Promise<void> {
    const Finesse_LoginURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2461";
    const Finesse_MakeCallURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2461/Dialogs?";
    const FinesseLogin_Payload = `<User>
    <state>LOGIN</state>
    <extension>2961</extension>
</User>`;
    const FinesseMakeCall_Payload = `<Dialog>
   <requestedAction>MAKE_CALL</requestedAction>
   <fromAddress>2961</fromAddress>
   <toAddress>${phNumber}</toAddress>
</Dialog>`;

    try {
        const loginResponse = await axios.put(Finesse_LoginURL, FinesseLogin_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2MToyOTYx'
            }
        });
        console.log("Login response code: " + loginResponse.status);
    } catch (error) {
        console.error(error);
    }

    try {
        const makeCallResponse = await axios.post(Finesse_MakeCallURL, FinesseMakeCall_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2MToyOTYx'
            }
        });
        console.log("Make call response code: " + makeCallResponse.status);
    } catch (error) {
        console.error(error);
    }
}

export async function makeCalltwoUknown(phNumber: string): Promise<void> {
    const Finesse_LoginURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2464";
    const Finesse_MakeCallURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2464/Dialogs?";
    const FinesseLogin_Payload = `<User>
    <state>LOGIN</state>
    <extension>2964</extension>
</User>`;
    const FinesseMakeCall_Payload = `<Dialog>
   <requestedAction>MAKE_CALL</requestedAction>
   <fromAddress>2964</fromAddress>
   <toAddress>${phNumber}</toAddress>
</Dialog>`;

    try {
        const loginResponse = await axios.put(Finesse_LoginURL, FinesseLogin_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2NDoyOTY0'
            }
        });
        console.log("Login response code: " + loginResponse.status);
    } catch (error) {
        console.error(error);
    }

    try {
        const makeCallResponse = await axios.post(Finesse_MakeCallURL, FinesseMakeCall_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2NDoyOTY0'
            }
        });
        console.log("Make call response code: " + makeCallResponse.status);
    } catch (error) {
        console.error(error);
    }
}

export async function makeCallthree(phNumber: string) {
    const Finesse_LoginURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2461";
    const Finesse_MakeCallURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2461/Dialogs?";
    const Finesse_CallID = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2461/Dialogs";
    const Finesse_SendDTMF = "https://bosfinnod02da.rpega.com:8445/finesse/api/Dialog/";
    let CallId = "";

    const FinesseLogin_Payload = `<User>
    <state>LOGIN</state>
    <extension>2961</extension>
</User>`;

    try {
        const loginResponse = await axios.put(Finesse_LoginURL, FinesseLogin_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2MToyOTYx'
            }
        });
        console.log("Login response code: ", loginResponse.status);
    } catch (error) {
        console.error(error);
    }

    const FinesseMakeCall_Payload = `<Dialog>
   <requestedAction>MAKE_CALL</requestedAction>
   <fromAddress>2961</fromAddress>
   <toAddress>${phNumber}</toAddress>
</Dialog>`;
    console.log("Make Call payload: ", FinesseMakeCall_Payload);

    try {
        const makeCallResponse = await axios.post(Finesse_MakeCallURL, FinesseMakeCall_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2MToyOTYx'
            }
        });
        console.log("Make call response code: ", makeCallResponse.status);
    } catch (error) {
        console.error(error);
    }

    await new Promise(resolve => setTimeout(resolve, 10000));

    try {
        const callIDResponse = await axios.get(Finesse_CallID, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2MToyOTYx'
            }
        });
        const responseData = callIDResponse.data;
        console.log("Response is: ", responseData);

        const startindex = responseData.replace(/\s/g, "").indexOf("<id>");
        console.log("Start index: ", startindex);

        const endindex = responseData.replace(/\s/g, "").indexOf("</id>");
        console.log("End index: ", endindex);

        CallId = responseData.replace(/\s/g, "").substring(startindex + 4, endindex);
        console.log("Call id for make call: ", CallId);
    } catch (error) {
        console.error(error);
    }

    await new Promise(resolve => setTimeout(resolve, 10000));

    const Finesse_SendDTMF_Payload = `<Dialog>
<targetMediaAddress>2961</targetMediaAddress>
<requestedAction>SEND_DTMF</requestedAction>
<actionParams>
    <ActionParam>
        <name>dtmfString</name>
        <value>2</value>
    </ActionParam>
</actionParams>
</Dialog>`;
    console.log("Send DTMF payload: ", Finesse_SendDTMF_Payload);

    const url = Finesse_SendDTMF + CallId;

    try {
        const senddtmfResponse = await axios.put(url, Finesse_SendDTMF_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2MToyOTYx'
            }
        });
        console.log("Send DTMF response code: ", senddtmfResponse.status);
    } catch (error) {
        console.error(error);
    }
}


export async function makeCallthreeUnknown(phNumber: string) {
    const Finesse_LoginURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2464";
    const Finesse_MakeCallURL = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2464/Dialogs?";
    const Finesse_CallID = "https://bosfinnod02da.rpega.com:8445/finesse/api/User/2464/Dialogs";
    const Finesse_SendDTMF = "https://bosfinnod02da.rpega.com:8445/finesse/api/Dialog/";
    let CallId = "";

    const FinesseLogin_Payload = `<User>
    <state>LOGIN</state>
    <extension>2964</extension>
</User>`;

    try {
        const loginResponse = await axios.put(Finesse_LoginURL, FinesseLogin_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2NDoyOTY0'
            }
        });
        console.log("Login response code: ", loginResponse.status);
    } catch (error) {
        console.error(error);
    }

    const FinesseMakeCall_Payload = `<Dialog>
   <requestedAction>MAKE_CALL</requestedAction>
   <fromAddress>2964</fromAddress>
   <toAddress>${phNumber}</toAddress>
</Dialog>`;
    console.log("Make Call payload: ", FinesseMakeCall_Payload);

    try {
        const makeCallResponse = await axios.post(Finesse_MakeCallURL, FinesseMakeCall_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2NDoyOTY0'
            }
        });
        console.log("Make call response code: ", makeCallResponse.status);
    } catch (error) {
        console.error(error);
    }

    await new Promise(resolve => setTimeout(resolve, 10000));

    try {
        const callIDResponse = await axios.get(Finesse_CallID, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2NDoyOTY0'
            }
        });
        const responseData = callIDResponse.data;
        console.log("Response is: ", responseData);

        const startindex = responseData.replace(/\s/g, "").indexOf("<id>");
        console.log("Start index: ", startindex);

        const endindex = responseData.replace(/\s/g, "").indexOf("</id>");
        console.log("End index: ", endindex);

        CallId = responseData.replace(/\s/g, "").substring(startindex + 4, endindex);
        console.log("Call id for make call: ", CallId);
    } catch (error) {
        console.error(error);
    }

    await new Promise(resolve => setTimeout(resolve, 10000));

    const Finesse_SendDTMF_Payload = `<Dialog>
<targetMediaAddress>2964</targetMediaAddress>
<requestedAction>SEND_DTMF</requestedAction>
<actionParams>
    <ActionParam>
        <name>dtmfString</name>
        <value>2</value>
    </ActionParam>
</actionParams>
</Dialog>`;
    console.log("Send DTMF payload: ", Finesse_SendDTMF_Payload);

    const url = Finesse_SendDTMF + CallId;

    try {
        const senddtmfResponse = await axios.put(url, Finesse_SendDTMF_Payload, {
            headers: {
                'Content-Type': 'Application/XML',
                'Authorization': 'Basic MjQ2NDoyOTY0'
            }
        });
        console.log("Send DTMF response code: ", senddtmfResponse.status);
    } catch (error) {
        console.error(error);
    }
}
