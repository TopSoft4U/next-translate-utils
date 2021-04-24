import useTranslation from "next-translate/useTranslation";
import {NextApiRequest} from "next";
import ntGetT from "next-translate/getT";

export const BoolToText = (val: boolean) => {
  const {t} = useTranslation("shared");

  if (val)
    return t("shared:yes");

  return t("shared:no");
};

export const localeXTerritory: Record<string, string> = {
  "en": "en_US",
  "de": "de_DE",
  "es": "es_ES",
  "fr": "fr_FR",
  "pl": "pl_PL",
  "ru": "ru_RU",
};

export const apiGetT = (req: NextApiRequest, ns: string) => {
  const lang = req.query.__nextLocale as string;
  return ntGetT(lang, ns);
};
