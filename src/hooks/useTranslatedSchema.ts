import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {TranslatableSchema} from "@appTypes/validation-schema";

export const useTranslatedSchema = (schema: TranslatableSchema) => {
    const {i18n, t} = useTranslation()

    return useMemo(() => schema(t), [i18n.language, schema])
}
