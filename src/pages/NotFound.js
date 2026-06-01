import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../components/CustomHook"
import { useI18n } from "../i18n/I18nContext"

const NotFound = () => {
  const { t } = useI18n()
  useDocTitle(t("notFound.docTitle"))

  return (
    <div className="bg-white py-24 mt-32">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">404</h1>
        <p className="text-gray-700 mb-6">{t("notFound.message")}</p>
        <Link to="/" className="inline-flex rounded-md bg-blue-900 px-5 py-2.5 font-semibold text-white hover:bg-blue-800">
          {t("notFound.home")}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
