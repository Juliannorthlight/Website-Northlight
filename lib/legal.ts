// Regulatory / compliance documents, transcribed from the firm's approved texts.
// Rendered by app/legal/[slug]/page.tsx. Edit the copy here only.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "dl"; rows: { term: string; def: string }[] };

export type LegalDoc = {
  slug: string;
  title: string;
  updated?: string;
  blocks: Block[];
};

const ukStewardshipCode: LegalDoc = {
  slug: "uk-stewardship-code",
  title: "UK Stewardship Code",
  blocks: [
    {
      type: "p",
      text: "Rule 2.2.3 of the FCA’s Conduct of Business Sourcebook requires an FCA authorised firm to either disclose its compliance or explain its non-compliance with the principles set out in the UK Financial Reporting Council’s Stewardship Code (the “Code”). Northlight Group LLP (“the Firm”) is regulated by the FCA in the United Kingdom and therefore subject to COBS 2.2.3R.",
    },
    {
      type: "p",
      text: "The Investment Manager’s strategy focuses on European credit opportunities and generally does not envisage significant investment in public equities. The strategy does, in principle, not result in direct investments in equities listed on the London Stock Exchange or any other UK Stock Exchange. Accordingly, whilst the Firm supports the Code as a mechanism to promote best practice in the institutional shareholder governance of UK listed companies, the Firm does not consider the Code or its principles to be appropriate for the funds’ investment strategies.",
    },
    {
      type: "p",
      text: "This Statement is reviewed annually and updated where necessary to reflect changes in circumstances and actual practice. Should the Firm’s position change we will review our commitment to the Code and make appropriate disclosure at that time.",
    },
    {
      type: "p",
      text: "For further details on any of the above information please contact the Firm’s Compliance Officer.",
    },
  ],
};

const sfdrDisclosure: LegalDoc = {
  slug: "sfdr-disclosure",
  title: "SFDR Disclosure",
  blocks: [
    {
      type: "p",
      text: "All funds of Northlight Group are managed taking environmental, social, and governance (“ESG”) factors into account as the Portfolio Manager considers that ESG issues can influence investment risk and return. Unless otherwise specified in a fund’s documentation, our funds do not promote environmental or social characteristics or have specific sustainable investment objectives. This means that whilst ESG risks and factors are considered, they may or may not impact the portfolio construction and investment decisions of the different investment teams.",
    },
  ],
};

const privacyPolicy: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  blocks: [
    { type: "h", text: "1. Why are we providing this notice?" },
    {
      type: "p",
      text: "The General Data Protection Regulation (“GDPR”) applies to the collection, processing and storage of personal data undertaken by organisations within the European Economic Area (EEA), as well as to firms and organisations outside the EEA that handle personal data relating to the offering of goods or services to individuals in the EEA.",
    },
    {
      type: "p",
      text: "The GDPR has two key purposes: (a) to set guidelines for the collection, processing and protection of personal data and (b) to give individuals certain rights in relation to their personal data (such as to access and correct it and object to further processing).",
    },
    { type: "p", text: "This Privacy Notice is intended to ensure that:" },
    {
      type: "ul",
      items: [
        "prospective investors, clients or similar contacts or, where a prospective investor, client or other similar contact is not an individual, the prospective investor’s, client’s or similar contact’s individual directors, officers, employees and/or owners; and/or",
        "individuals outside our organisation with whom we interact, including visitors to our website, personnel of service providers or other suppliers and others who interact with us whether via our website or by corresponding with us by other means (e.g. by emailing or phoning us), (“you”, or “your”)",
      ],
    },
    {
      type: "p",
      text: "are aware of the categories of your personal data Northlight Group LLP (“we”, “us” or “our”) may collect, how we collect it, what we use it for and with whom we share it in accordance with the GDPR.",
    },
    {
      type: "p",
      text: "Where the prospective investor, client or similar contact is not an individual please provide a copy of this Privacy Notice to those individual directors, officers, employees and/or owners whose personal data we may process.",
    },
    {
      type: "p",
      text: "“Personal data” means any information relating to you, but does not include data where you can no longer be identified from it such as anonymised aggregated data.",
    },
    {
      type: "p",
      text: "We will be a data controller in respect of your relationship with us, whether as a prospective investor or similar contact or as an individual outside our organisation with whom we interact, including visitors to our website or personnel of service providers or similar who interact with us whether via our website or by similar means. A data controller is responsible for deciding how to hold and use personal data about you. We may process your personal data ourselves or through others acting as data processors on our behalf.",
    },
    {
      type: "p",
      text: "We may provide supplemental privacy notices on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your personal data. These supplemental notices should be read together with this Privacy Notice.",
    },
    {
      type: "p",
      text: "If you have any questions about this Privacy Notice you can contact compliance@northlight.co.uk.",
    },

    { type: "h", text: "2. What information do we collect about you and what do we use it for?" },
    {
      type: "p",
      text: "Personal data held by us or on our behalf may include, but is not necessarily limited to, your name, address or residential address, place of business, email address, other contact details, corporate contact information, signature, employment and job history, regulatory status, correspondence records, details relating to your investment activity or preferences, job title, information about how you use our website, other technical data such as your IP address, browser type and version, time zone setting, location, and, when established, login data for our web portal.",
    },
    {
      type: "p",
      text: "The purposes for which we may collect, store and use personal data about you and our ‘lawful basis’ for processing such data are set out below. The law specifies certain ‘lawful bases’ for which we are allowed to use your personal data.",
    },
    {
      type: "dl",
      rows: [
        {
          term: "To undertake pre-investment steps including but not limited to: determining your eligibility to invest; required due diligence; and ascertaining your investment preferences.",
          def: "In order to take steps prior to the contract between you and us / the fund in which you may invest, compliance with applicable legal obligations and our legitimate interests in establishing your preferred investment strategies.",
        },
        {
          term: "To correspond with you.",
          def: "Our legitimate interests in responding to your enquiry, contacting you in relation to the services you provide or otherwise communicating with you in the course of our business.",
        },
        {
          term: "To undertake business development and marketing activities in relation to making suggestions and recommendations to you about products or services that may be of interest to you. This may include direct electronic marketing.",
          def: "Our legitimate interests in promoting our products and services and growing our business. We only send direct electronic marketing where individuals have consented to this or as otherwise permitted by the law. Individuals can opt-out of receiving such messages at any time by using the opt-out mechanisms that may be available in those messages or by contacting us at compliance@northlight.co.uk.",
        },
        {
          term: "To correspond with or to disclose information to other third parties such as service providers, legal advisors, auditors and technology providers and regulatory authorities.",
          def: "Compliance with applicable legal obligations. Our legitimate interests in conducting our business in a proper manner.",
        },
        {
          term: "To maintain our records.",
          def: "Our legitimate interests in conducting our business in a proper manner.",
        },
      ],
    },
    {
      type: "p",
      text: "In addition to the uses above, please note that we may also process your information where we are required by law to do so or if we reasonably believe that it is necessary to protect our rights and/or to comply with judicial or regulatory proceedings, a court order or other legal process.",
    },

    { type: "h", text: "2.1 Special categories of personal data" },
    {
      type: "p",
      text: "There are more limited bases for processing special category personal data. This is personal data which reveals or contains racial or ethnic origin, political opinions, religious and philosophical beliefs, trade union membership, genetic data, biometric data, health data, sex life and sexual orientation.",
    },
    {
      type: "p",
      text: "We do not intend to actively collect special category data about you. Whilst we will use reasonable efforts to limit our holding of such data, please be aware that we may hold such data incidentally. For example, where:",
    },
    {
      type: "ul",
      items: [
        "you volunteer special category data to us or one of our processors, such as if you send us an email containing special category data;",
        "documents gathered for legal / regulatory purposes contain special category data, such as a due diligence search from public sources which includes special category data.",
      ],
    },

    { type: "h", text: "2.2 What if you do not provide the personal data requested?" },
    { type: "p", text: "Unless and until you make a decision to:" },
    {
      type: "ul",
      items: [
        "invest or otherwise engage in a business transaction with us or invest in one of our investment products; and/or",
        "engage in a business transaction with us,",
      ],
    },
    {
      type: "p",
      text: "at which point we will send you a copy of any relevant privacy notice, you are not required to provide us with any information (although please note that our website may automatically collect certain technical data) (further details on this are in the ‘How do we collect this information?’ section).",
    },

    { type: "h", text: "2.3 Change of purpose" },
    {
      type: "p",
      text: "We will only use your personal data for the purposes for which we collected it (as identified above in the ‘Purpose’ column), unless we reasonably consider that we need to use it for another reason which is compatible with the original purpose. If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.",
    },

    { type: "h", text: "3. How do we collect this information?" },
    {
      type: "p",
      text: "We typically collect personal data about you when you provide information to us or others acting on our behalf:",
    },
    {
      type: "ul",
      items: [
        "when communicating or transacting with us in writing, electronically, or by phone. For instance, when you request product documentation, forms of literature from us or otherwise correspond with us; and/or",
        "when communicating or transacting with us in writing by filling in forms or by corresponding with us by post, phone, email or otherwise. As you interact with our website, we may automatically collect technical data about your equipment, browsing actions and patterns. We may collect this personal data by using cookies, server logs and other similar technologies.",
      ],
    },
    { type: "p", text: "In addition, we may receive personal information or data about you from third parties, such as:" },
    {
      type: "ul",
      items: [
        "public sources or information vendors; and",
        "introducers, distributors or other intermediaries who market or provide services to you.",
      ],
    },

    { type: "h", text: "4. With whom will we share your information?" },
    {
      type: "p",
      text: "We may share your personal data with a third party where this is required by law, where it is necessary to perform our contract with you, or where we have another legitimate interest in doing so. We may need to share your personal data with:",
    },
    {
      type: "ul",
      items: [
        "other entities within our group as part of our regular reporting activities in company performance, in the context of a business reorganisation or group restructuring exercise or for assistance in relation to marketing and business development;",
        "introducers, distributors or other intermediaries who market or provide services to you;",
        "professional advisers including lawyers, bankers, auditors and insurers to the extent such information is relevant to their performance of their services;",
        "regulators;",
        "tax authorities;",
        "trading counterparties;",
        "cloud service providers; and",
        "any of our service providers where such information is relevant to their performance of such services.",
      ],
    },
    {
      type: "p",
      text: "We may transfer the personal data we collect about you to non-EEA countries, including the Cayman Islands and Switzerland, where the parties listed above are based for the purposes outlined above. Those countries may not have the same standard of data protection laws as the EEA. Where this is the case, we will (or will require a processor to) put in place appropriate safeguards such as the EEA-approved standard contractual clauses to ensure that your personal data is treated in a manner that is consistent with and respects the EEA laws on data protection. If you require further information about this you can request it from compliance@northlight.co.uk.",
    },

    { type: "h", text: "5. How long will we retain your information?" },
    {
      type: "p",
      text: "We will retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, accounting or reporting requirements and our legitimate interests in maintaining such personal information in our records. Generally, we will keep information relevant to our dealings with you for 7 years following the last date of activity or longer as required by applicable law or regulation.",
    },
    {
      type: "p",
      text: "Once we no longer require your personal data for the purposes for which it was collected, we will securely destroy your personal data in accordance with applicable laws and regulations.",
    },

    { type: "h", text: "6. Accuracy of information" },
    {
      type: "p",
      text: "It is important that the personal data we hold about you is accurate and current. Please let us know if your personal data which we hold changes during your relationship with us.",
    },

    { type: "h", text: "7. Your rights in relation to your information" },
    {
      type: "p",
      text: "You have rights as an individual which you can exercise in relation to the information we hold about you under certain circumstances. These rights are to:",
    },
    {
      type: "ul",
      items: [
        "request access to your personal data (commonly known as a “data subject access request”) and request certain information in relation to its processing;",
        "request rectification of your personal data;",
        "request the erasure of your personal data;",
        "request the restriction of processing of your personal data;",
        "object to the processing of your personal data;",
        "request the transfer of your personal data to another party.",
      ],
    },
    {
      type: "p",
      text: "If you want to exercise one of these rights please contact us at compliance@northlight.co.uk. You also have the right to make a complaint at any time to a supervisory authority for data protection issues.",
    },

    { type: "h", text: "8. Right to withdraw consent" },
    {
      type: "p",
      text: "In the limited circumstances where you may have provided your consent to the collection, processing and transfer of your personal data for a specific purpose, you have the right to withdraw your consent for that specific processing at any time. To withdraw your consent, please contact compliance@northlight.co.uk. Once we have received notification that you have withdrawn your consent, we will no longer process your information for the purpose(s) to which you originally consented unless we now have an alternative legal basis for doing so.",
    },

    { type: "h", text: "9. Changes to this privacy notice" },
    {
      type: "p",
      text: "We reserve the right to update this Privacy Notice at any time, and we will make an updated copy of such Privacy Notice available to you and notify you when we make any substantial updates. We may also notify you in other ways from time to time about the processing of your personal data.",
    },

    { type: "h", text: "10. Further information" },
    {
      type: "p",
      text: "This Privacy Notice was written with brevity and clarity in mind and is not an exhaustive account of all aspects of our collection and use of personal data. If you require any further information, please do not hesitate to contact compliance@northlight.co.uk.",
    },
  ],
};

const financialPromotions: LegalDoc = {
  slug: "financial-promotions-disclaimer",
  title: "Financial Promotions Disclaimer",
  updated: "Q2 2024",
  blocks: [
    {
      type: "p",
      text: "This document is issued by Northlight Group LLP (the “Investment Manager”) which is authorised and regulated by the Financial Conduct Authority in the United Kingdom with firm reference number 506925 and provides information about the Northlight European Fundamental Credit Fund, the MFM Northlight European Credit Opportunities Fund (the “Funds” or individually the “Fund”) and the Investment Manager. The Investment Manager is registered as an Exempt Reporting Adviser with the US Securities and Exchange Commission.",
    },
    {
      type: "p",
      text: "The distribution of this document is restricted by law. It has been made available only to a selected group of recipients. The information contained in this document is also confidential. You must not copy this document or pass it to anyone else. If you (or the legal person you represent) did not receive this document directly from the Investment Manager, please return it to the Investment Manager.",
    },
    {
      type: "p",
      text: "The Investment Manager will not act for you (or any other investor) and will not be responsible to you for providing protections afforded to the clients of the Investment Manager’s investment services. Without prejudice to the generality of the foregoing, the Investment Manager does not provide any investment service to you (including, without limitation, the provision of investment advice, or the reception and transmission of orders).",
    },
    {
      type: "p",
      text: "This document is not, and must not be treated as, investment advice, investment recommendations, or investment research. Recipients of this document must not take (or refrain from taking) any investment decision on the basis of the information set out in this document. Before making any investment decision, you should seek independent investment, legal, tax, accounting or other professional advice as appropriate, none of which is offered to you by the Investment Manager. The Investment Manager accepts no duty of care to you in relation to investments.",
    },
    {
      type: "p",
      text: "This document is for information purposes only. This document is not intended to constitute an offering or placement, or the solicitation of an offer to subscribe for, units or shares in the Funds, in any jurisdiction. Any such offering or placement, if made, would be made only by way of a prospectus (or other formal offering document) for the Funds and only in jurisdictions in which such an offering or placement would be lawful. The offering document for the Funds will contain important information concerning risk factors and other material information concerning the Funds. An investment into the Funds may expose a person accepted as an investor in the Funds to a significant risk of losing some or all of the amount invested.",
    },
    {
      type: "p",
      text: "The information contained in this document should not be construed as either projections or predictions. The Investment Manager makes no representation or warranty, express or implied, except as required by law or in the case of fraud, regarding the accuracy, completeness or adequacy of the information. Past performance cannot be relied on as a guide to future performance.",
    },
    { type: "p", text: "In addition, the following restrictions apply to the distribution of this document." },

    { type: "h", text: "Persons in the European Economic Area and the United Kingdom" },
    {
      type: "p",
      text: "In relation to each member state of the EEA and the United Kingdom (each a “Relevant State”), this document may only be distributed to the extent that: (1) the Fund is permitted to be marketed to professional investors in the Relevant State in accordance with the Alternative Investment Fund Managers Directive (2011/61/EU) (as implemented into the local law/regulation of the Relevant State); or (2) this document may otherwise be lawfully distributed in that Relevant State (including at the initiative of the investor). No key information document will be prepared in respect of the Fund in accordance with Regulation (EU) No 1286/2014 (as implemented into the local law/regulation of the Relevant State). Accordingly, investment in the Funds will not be available to, and no person may currently advise on, offer or sell investments in the Funds for or to, any retail client (as defined in the EU’s re-cast Markets in Financial Instruments Directive (2014/65/EU)) as implemented into the local law/regulation of any Relevant State.",
    },

    { type: "h", text: "Persons in the United Kingdom" },
    {
      type: "p",
      text: "This document is being issued in the United Kingdom by the Investment Manager to and/or is directed only at persons who are professional investors for the purposes of the Alternative Investment Fund Managers Regulations 2013, as amended and is accordingly exempt from the financial promotion restriction in Section 21 of the Financial Services and Markets Act 2000 (“FSMA”) in accordance with article 29(3) of the FSMA (Financial Promotions) Order 2005. The opportunity to invest in the Funds is only available to such persons in the United Kingdom and this document must not be relied or acted upon by any other persons in the United Kingdom.",
    },

    { type: "h", text: "Persons in the United States" },
    {
      type: "p",
      text: "This document is not intended for distribution in the United States or for the account of U.S. persons (as defined in Regulation S under the United States Securities Act of 1933, as amended (the “Securities Act”)) except to persons who are “qualified purchasers” (as defined in section 2(a)(51) of the United States Investment Company Act of 1940, as amended (the “Investment Company Act”)) and “accredited investors” (as defined in Rule 501(a) under the Securities Act). The Funds’ securities will not be registered under the U.S. Securities Act of 1933, as amended, or qualified under any applicable state securities statutes. The Funds will not be registered as an investment company under the Investment Company Act.",
    },

    { type: "h", text: "Persons in Switzerland" },
    {
      type: "p",
      text: "The offer and marketing of interests of the Funds in Switzerland will be exclusively made to, and directed at, qualified investors (the “Qualified Investors”), as defined in Article 10(3) of the Swiss Collective Investment Schemes Act (“CISA”) in conjunction with Art. 4(4) of the Swiss Federal Act on Financial Services (“FinSA”), i.e. institutional clients, at the exclusion of professional clients with opting-out pursuant to Art. 5(3) FinSA (“Excluded Qualified Investors”). Accordingly, the Funds will not be registered with the Swiss Financial Market Supervisory Authority (“FINMA”).",
    },
    {
      type: "p",
      text: "The representative of the Northlight European Fundamental Credit Fund in Switzerland is Auris Wealth Management S.A., registered office at 15 Boulevard des Philosophes, 1025 Geneva, Switzerland. The Paying Agent of the Northlight European Fundamental Credit Fund in Switzerland is Banque Heritage S.A., Switzerland, with registered office at Route de Chêne 61, 1208 Geneva, Switzerland. The representative of the MFM Northlight European Credit Opportunities Fund in Switzerland is FundPartner Solutions (Suisse) SA, with registered office at Route des Acacias 60, 1211 Geneva 73, Switzerland. The Paying Agent of the MFM Northlight European Credit Opportunities Fund in Switzerland is Pictet & Cie Bank SA, with registered office at Route des Acacias 60, 1211 Geneva 73, Switzerland. This document and/or any other offering or marketing materials relating to the interests of the Funds may be made available in Switzerland solely to Qualified Investors, at the exclusion of Excluded Qualified Investors. The legal documents relating to the interests in the Funds may be obtained free of charge from the relevant Fund’s representative.",
    },

    { type: "h", text: "Persons in Japan" },
    {
      type: "p",
      text: "The shares in the Funds have not been and will not be registered pursuant to Article 4, Paragraph 1 of the Financial Instruments and Exchange Law of Japan (Law no. 25 of 1948, as amended) and, accordingly, none of the shares in the Funds nor any interest therein may be offered or sold, directly or indirectly, in Japan or to, or for the benefit of, any Japanese person or to others for re-offering or resale, directly or indirectly, in Japan or to any Japanese person except under circumstances which will result in compliance with all applicable laws, regulations and guidelines promulgated by the relevant Japanese governmental and regulatory authorities and in effect at the relevant time. For this purpose, a “Japanese person” means any person resident in Japan, including any corporation or other entity organised under the laws of Japan.",
    },

    { type: "h", text: "Persons in other jurisdictions" },
    {
      type: "p",
      text: "The distribution of this document may be further restricted by law. Accordingly, this document may not be used in any jurisdiction except under circumstances that will result in compliance with any applicable laws and regulations. Persons to whom this document is communicated should inform themselves about and observe any such restrictions. Any failure to comply with these restrictions may constitute a violation of applicable securities law.",
    },
  ],
};

const emailDisclaimer: LegalDoc = {
  slug: "email-disclaimer",
  title: "Email Disclaimer",
  blocks: [
    {
      type: "p",
      text: "The information contained in this e-mail message and any attachments hereto is confidential and is intended solely for the person to whom it is addressed. Any use, disclosure, reproduction, modification or distribution other than by the intended recipient, is strictly prohibited. If you are not the intended recipient or have received this message in error, please notify us immediately by return e-mail and destroy the message.",
    },
    {
      type: "p",
      text: "This message does not constitute an offer to sell, placement or solicitation of an offer to buy interests in any fund or product and may not be used to make such an offer. Therefore no person receiving a copy of this email may treat it as constituting an offer, placement or invitation to buy or sell any investments.",
    },
    {
      type: "p",
      text: "Unless otherwise stated, the information contained herein may only be considered as opinion, which may be based on assumptions, historical information and other data that the sender in their sole discretion considers appropriate or reasonable. It may not be accurate, complete or current, and the sender has no liability with respect thereto. Moreover, this information should not be relied upon by you for the maintenance of your books and records or for tax, accounting, legal, financial reporting, disclosure or other purposes. Certain information provided may be subject to change without notice and we have no obligation to update you.",
    },
    {
      type: "p",
      text: "Our messages are checked for viruses but please note that we do not accept liability for any viruses which may be transmitted in or with this message.",
    },
    {
      type: "p",
      text: "Northlight is committed to keeping your personal data secure. We will process any personal data we collect from you in accordance with the EU General Data Protection Regulation 2016/679 including as applicable in the United Kingdom, where it is supplemented by the Data Protection Act 2018.",
    },
    {
      type: "p",
      text: "We deem to have your consent to hold your information on our systems and be able to send you information on the Northlight funds and/or relevant marketing emails. Your consent can be withdrawn at any time by notifying us at IR@northlight.co.uk.",
    },
    {
      type: "p",
      text: "Our Privacy Policy is available on our website and provides further information about how we store and use personal data.",
    },
    {
      type: "p",
      text: "Northlight Group LLP is authorised and regulated by the UK Financial Conduct Authority with firm reference number 506925. Registered address 33 Glasshouse Street, London, W1B 5DG and is registered with the US Securities and Exchange Commission as an exempt reporting adviser. Registered in the UK with partnership registration number OC348379.",
    },
  ],
};

export const legalDocs: LegalDoc[] = [
  ukStewardshipCode,
  sfdrDisclosure,
  privacyPolicy,
  financialPromotions,
  emailDisclaimer,
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
