import {createRoot} from "react-dom/client";

import {App} from "@components/App/App"

import "./index.css"
import {StrictMode, Suspense} from "react"
import {Provider} from "react-redux"
import {persistor, store} from "@features/redux/store"
import { PersistGate } from "redux-persist/integration/react"
import {I18nextProvider} from "react-i18next"
import i18n from "@features/i18n";

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <I18nextProvider i18n={i18n}>
                    <Suspense fallback={"Loading..."}>
                        <App/>
                    </Suspense>
                </I18nextProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
)
