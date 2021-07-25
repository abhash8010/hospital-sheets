import React from 'react'
import { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { AppSheet } from './AppSheet'
import info from "./sheets_info"
import LoadingScreen from "./LoadingScreen"

export function MainApp({ children }) {
    const [doc, setDoc] = useState(null)
    // Assigning vars
    const Client_email = info.info[0].Client_email;
    const Private_key = info.info[0].Private_key;
    useEffect(() => {
        const doc = new GoogleSpreadsheet("1swFPimyp2oxqnBXG__dSngG7mtKnSKHPR6qr3raeRN8");
        const init = async () => {
            await doc.useServiceAccountAuth({
                client_email: Client_email,
                private_key: Private_key,
            })
            await doc.loadInfo();
            setDoc(doc)
        }
        init();
    }, [Client_email, Private_key]);
    if (!doc) return <LoadingScreen />
    return <AppSheet.Provider value={doc}>{children}</AppSheet.Provider>
}

export default MainApp
