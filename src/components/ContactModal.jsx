import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../i18n/I18nContext";
import { useContactModal } from "./ContactModalContext";
import logo from "../images/pepliesconsult_logo_black.svg";

/** Matches `Hero.js` — white logo with glow on dark backgrounds */
const HERO_LOGO_STYLE = {
  filter:
    "brightness(0) saturate(100%) invert(100%) drop-shadow(0 0 20px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(0,0,0,0.4)) drop-shadow(0 0 60px rgba(0,0,0,0.3))",
};

const PHONE_DISPLAY = ["0049-178-8271600", "0049-152-53823353"];
const PHONE_TEL = ["+491788271600", "+4915253823353"];
const EMAILS = ["peplies@pepliesconsult.de", "kuerzer@pepliesconsult.de"];

const PhoneIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 4.5a2.25 2.25 0 012.25-2.25h2.257c.966 0 1.799.689 1.98 1.638l.63 3.308a2.25 2.25 0 01-.633 2.03L7.53 10.425a15.75 15.75 0 006.045 6.045l1.204-1.204a2.25 2.25 0 012.03-.634l3.308.63a2.25 2.25 0 011.638 1.981V19.5a2.25 2.25 0 01-2.25 2.25h-.75C8.872 21.75 2.25 15.128 2.25 6.75V4.5z"
    />
  </svg>
)

const AddressIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l8.265 5.51a1.35 1.35 0 001.47 0L21 7.5" />
  </svg>
)

export function ContactModal() {
  const { open, closeContact } = useContactModal();
  const { t } = useI18n();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeContact();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, closeContact]);

  if (!open) return null;

  const linkClass =
    "font-medium text-blue-900 underline decoration-blue-900/30 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-700/50 break-all";

  const iconClass = "mt-0.5 inline-flex w-9 shrink-0 justify-center text-2xl text-blue-900 sm:w-10 sm:text-[1.65rem]";

  const rowClass = "flex gap-4 sm:gap-5";

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={t("contact.modalTitle")}
    >
      <div
        role="presentation"
        className="absolute inset-0 cursor-pointer bg-slate-900/55 backdrop-blur-md transition-opacity"
        onClick={closeContact}
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-4xl rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/25 ring-1 ring-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2"
      >
        <div className="rounded-t-3xl bg-blue-900 px-5 py-4 sm:px-8 sm:py-5">
          <img
            src={logo}
            alt={t("contact.logoAlt")}
            className="h-12 w-auto sm:h-24"
            width={160}
            height={96}
            style={HERO_LOGO_STYLE}
          />
        </div>

        <div className="px-6 py-8 sm:px-12 sm:py-12">
          <div className="space-y-9 sm:space-y-11">
            <section>
              <div className={rowClass}>
                <span className={iconClass} aria-hidden>
                  <PhoneIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-base font-semibold text-slate-900 sm:text-lg">{t("contact.callUs")}</h3>
                  <div className="space-y-2 text-slate-600 sm:text-lg">
                    {PHONE_DISPLAY.map((label, i) => (
                      <p key={label}>
                        <a href={`tel:${PHONE_TEL[i]}`} className={linkClass}>
                          {label}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-slate-200" aria-hidden />

            <section>
              <div className={rowClass}>
                <span className={iconClass} aria-hidden>
                  <AddressIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-base font-semibold text-slate-900 sm:text-lg">{t("contact.writeUs")}</h3>
                  <div className="space-y-1 text-slate-600 sm:text-lg">
                    <p className="font-medium text-slate-800">{t("contact.companyName")}</p>
                    <p>{t("contact.street")}</p>
                    <p>{t("contact.postalCode")}</p>
                    <p>
                      {t("contact.city")} {t("contact.country")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-slate-200" aria-hidden />

            <section>
              <div className={rowClass}>
                <span className={iconClass} aria-hidden>
                  <MailIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-base font-semibold text-slate-900 sm:text-lg">{t("contact.mailUs")}</h3>
                  <div className="space-y-2 text-slate-600 sm:text-lg">
                    {EMAILS.map((addr) => (
                      <p key={addr}>
                        <a href={`mailto:${addr}`} className={linkClass}>
                          {addr}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
