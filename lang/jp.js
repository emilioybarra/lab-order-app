export default {
  common: {
    buttons: {
      close: 'クローズ',
      exit: '出口',
      language: '言語',
      selectFromTemplate: 'テンプレートから選択',
      saveAsTemplate: 'テンプレートとして保存',
      next: '次の',
      newForm: '新しい形',
      sentForms: '送信されたフォーム',
      save: '保存',
      cancel: 'キャンセル',
      send: '送信',
      preview: 'PDFのプレビュー',
      download: 'PDFダウンロード',
      generatingPdf: 'PDFの生成...',
      search: '検索',
      apply: '適用する',
      date: '日付',
      dateRange: '日付範囲',
      fromDate: '日付',
      toDate: '日付',
      select: '選択',
      login: 'ログイン',
      logout: 'ログアウト',
      allForms: 'すべてのフォーム'
    },
    titles: {
      invoiceAddress: '請求書の住所',
      upperTeeth: '上の歯',
      lowerTeeth: '下の歯',
      sentForms: '送信フォーム',
      templates: 'テンプレート',
      sendForm: 'フォームを送信',
      orderForms: 'オーダーフォーム',
      login: 'ログイン'
    },
    headlines: {
      newForm: '新しいフォームを作成する',
      sentForms: 'これまでに送信されたすべてのフォームの概要を確認する',
      emptyOrderForms: '送信されたフォームがありません。',
      emptyOrderFormsSearch: '一致するフォームは見つかりませんでした。',
      emptyTemplates: '保存されているテンプレートがありません。',
      orderSent: 'フォームが保存され、送信されました'
    },
    labels: {
      expansion: '',
      compression: '',
      sectionType1: 'SE-NiTi',
      sectionType2: 'Steel',
      sectionType3: 'ß-Ti',
      templateTitle: 'テンプレートタイトル',
      searchPlaceholder: '検索...',
      username: 'ユーザー名',
      password: 'パスワード'
    },
    notifications: {
      savedOrderForm: 'フォームが保存されました。',
      savedTemplate: 'テンプレートを保存しました。',
      deletedTemplate: 'テンプレートを削除しました。',
      error: 'エラーが発生しました。',
      errorLogin: '<strong>エラーです。</strong> ユーザー名またはパスワードが有効ではありません。',
      invalidLines: 'PDFに入力した行数が多すぎます。'
    }
  },
  section: {
    h_1: {
      contact: {
        title: '',
        streetHouse: 'Lindenstraße 44',
        zipCityCountry: '49152 Bad Essen, Germany',
        telephone: 'Tel.: +49 5472 95 444 251',
        fax: 'Fax: +49 5472 95 444 294',
        email: 'win@lingualsystems.de'
      },
      address: {
        title: 'Supported by:',
        name: 'DW Lingual Systems Japan 株式会社',
        address1: '〒113-0034',
        address2: '東京都文京区湯島2-2-16 御茶ノ水クロスビル 4F',
        email: 'info@lingualsystems.jp'
      }
    },
    h_2: {
      invoiceAddress: '',
      practice: '医院名',
      orthodontist: '矯正歯科医師名',
      address: '住所',
      postalcodeTownShort: '郵便番号',
      telephone: '電話',
      telefax: 'ファックス',
      email: 'Eメール',
      idVat: '',
      patient: {
        lastName: '患者名（姓）',
        firstName: '患者名（名）',
        number: '患者番号',
        dateOfBonding: ''
      }
    },
    h_3: {
      standardSetup: 'スタンダード Setup希望',
      standardSetupText1: 'スタンダードSetupに限り、「3D Setup写真」と「スーパーポジション写真」の オプションを注文する事ができます。特記事項より選択してください。',
      standardSetupText2: '*以下のSetupの注文には別途 【Setupインストラクション】 が必要です。',
      standardSetupPlus: 'スタンダードプラス Setup希望',
      standardSetupPlusText1: '• 2D Setup写真',
      standardSetupPlusText2: '• Setupレポート（正中の移動量/3番と6番の歯牙間幅径）',
      premiumSetupPlus: 'プレミアム Setup希望',
      premiumSetupPlusText1: '• 2D Setup写真',
      premiumSetupPlusText2: '• Setupレポート',
      premiumSetupPlusText3: '（正中の移動量/1番と6番の近遠移動量/各歯牙間幅径変化量）',
      premiumSetupPlusText4: '4回目以降の修正は、別途50ユーロかかります。',
      stateOrthodontistNameOnInvoice: '矯正歯科医師名を請求書に記載する必要 がある場合は、チェックを入れてください。',
      patientConsent: '(患者個人の健康状態に関する個人情報の転送 には、書面による患者の同意が必要です)',
      shippingAddress: ''
    },
    u_1: {
      onlySetup: 'セットアップのみ',
      euroTypeInfo: '* 装置作製のため指示はすべてヨーロッパ式の歯番にて、ご記入をお願い致します。'
    },
    u_2: {
      strippingTitle: '',
      boltonDiscrepancy: '',
      resolveCrowding: '',
      rcMm: '',
      rcWhere: '',
      reduceOverjet: '',
      roMm: '',
      roWhere: '',
      upperInfo: '',
      upperInfoLegend: '',
      notes: {
        title: '特記事項:',
        stripping: 'ストリッピング',
        strippingMm: 'mm',
        where: '部位:',
        boltonDiscrepancy: 'ボルトンディスクレパンシーのみ',
        boxTitle: ''
      }
    },
    u_3: {
      title: '上顎アーチワイヤー',
      pleaseTick: 'チェックしてください',
      straight: '側方歯部ストレート',
      individual: '側方歯部アイデアル'
    },
    m_1: {
      notes: '特記事項',
      remarksTitle: '特記事項:',
      threeDSetup: '3D Setup写真',
      tpa: 'トランスパラタルアーチ',
      herbst: 'ハーフ゛スト',
      bondableHGTube: 'HGチューフ゛',
      bondableHGTubeWithShell: 'シェル付HGチューフ゛',
      superpositionPhoto: 'スーハﾟーホﾟシﾞション写真',
      dlcSteelWire: 'DLCスチールワイヤー:',
      upperJaw: '上顎',
      lowerJaw: '下顎',
      keyInfoColors: [ '#72FBFD', '#909090', '#EB3423', '#74FBB7', '#75FA4F', '#A12CF6', '#000000', '#EA37C4' ],
      keyInfo: '<strong>抜歯症例の場合、空隙閉鎖 の有無をご記入ください。</strong>',
      // Key Info for the PDF
      keyInfoLegendPDF: `
        <div><strong>B</strong> = ブラケット</div>&nbsp;|&nbsp;
        <div><strong>T</strong> = チューブ</div>&nbsp;|&nbsp;
        <div><strong>TL</strong> = ロングチューブ</div>&nbsp;|&nbsp;
        <div><strong>TLH</strong> = フック付ロングチューブ</div>&nbsp;|&nbsp;
        <div><strong>Ex</strong> = 抜歯部位</div>&nbsp;|&nbsp;
        <div><strong>X</strong> = 欠損歯</div>&nbsp;|&nbsp;
        <div><strong>BA</strong> = 鋳造バンド</div>&nbsp;|&nbsp;
        <div><strong>P</strong> = オクルーザルパッド</div>
      `,
      // Key Info for the TeethCanvas Component
      keyInfoLegend: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--b"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>B</strong>&nbsp;= ブラケット</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--t"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>T</strong>&nbsp;= チューブ</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tl"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TL</strong>&nbsp;= ロングチューブ</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tlh"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TLH</strong>&nbsp;= フック付ロングチューブ</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ex"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>Ex</strong>&nbsp;= 抜歯部位</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--x"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>X</strong>&nbsp;= 欠損歯</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ba"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>BA</strong>&nbsp;= 鋳造バンド</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--p"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>P</strong>&nbsp;= オクルーザルパッド</div>'
      ],
      keyInfoLegendLeft: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--b"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>B</strong>&nbsp;= ブラケット</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--t"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>T</strong>&nbsp;= チューブ</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tl"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TL</strong>&nbsp;= ロングチューブ</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tlh"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TLH</strong>&nbsp;= フック付ロングチューブ</div>'
      ],
      keyInfoLegendRight: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ex"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>Ex</strong>&nbsp;= 抜歯部位</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--x"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>X</strong>&nbsp;= 欠損歯</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ba"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>BA</strong>&nbsp;= 鋳造バンド</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--p"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>P</strong>&nbsp;= オクルーザルパッド</div>'
      ]
    },
    m_2: {
      noCorrectionOfBite: '',
      differingFromOneClassTitle: 'クラスⅠと異なるセットアップ希望の場合:',
      rightCanine: '右側犬歯',
      rightMolar: '右側大臼歯',
      leftCanine: '左側犬歯',
      leftMolar: '左側大臼歯'
    },
    m_3: {
      tray: {
        title: 'トレーの材質',
        nonTransparent: '不透明',
        trayTrimmed3_3: '3-3唇側をトリム',
        transparent: '透明'
      }
    },
    l_1: {
      onlySetup: 'セットアップのみ',
      euroTypeInfo: '* 装置作製のため指示はすべてヨーロッパ式の歯番にて、ご記入をお願い致します。'
    },
    l_2: {
      strippingTitle: '',
      boltonDiscrepancy: '',
      resolveCrowding: '',
      rcMm: '',
      rcWhere: '',
      reduceOverjet: '',
      roMm: '',
      roWhere: '',
      lowerInfo: '',
      lowerInfoLegend: '',
      notes: {
        title: '特記事項:',
        stripping: 'ストリッピング',
        strippingMm: 'mm',
        where: '部位:',
        boltonDiscrepancy: 'ボルトンディスクレパンシーのみ',
        boxTitle: ''
      }
    },
    l_3: {
      title: '下顎アーチワイヤー',
      pleaseTick: 'チェックしてください',
      straight: '側方歯部ストレート',
      individual: '側方歯部アイデアル'
    },
    f_1: {
      generalTerms: '取引条件を承諾の上注文します',
      signature: '(署名 / 押印)',
      date: '(日/月/年)',
      version: 'TD-JP-3.2 Rev. 3.3i01'
    }
  },
  agbs: {
    title: 'GENERAL BUSINESS TERMS OF DW LINGUAL SYSTEMS GMBH (“DW Lingual”)',
    content: `
      <strong>§ 1 Scope</strong>
      <br>
      All deliveries, services and offers of DW Lingual shall be exclusively carried out based on these General Business Terms (“AGB”). They shall be deemed as agreed by no later than with the acceptance of the goods or other service even if the contractual partner (“Customer”) should have objected here to in advance. General Business Terms of the Customer or third parties shall not apply even if DW Lingual does not object to their validity separately in an individual case. These General Business Terms shall only apply towards companies within the meaning of § 14 BGB [German Civil Code].
      <br><br>
      <strong>§ 2 Offer and conclusion of contract</strong>
      <br>
      All offers of DW Lingual are without obligation and non-binding insofar as they are not explicitly marked as binding or contain a certain acceptance deadline. Solely decisive for the legal relations between DW Lingual and the Customer is the contract concluded in writing, including these General Business Terms. Contracts between DW Lingual and the Customer, their addendums and amendments as well as addendums and amendments to these General Business Terms require a written form in order to be valid, §127 Par. 2 BGB shall apply.
      <br><br>
      <strong>§ 3 Prices and payment</strong>
      <br>
      The prices which are valid on the day of the delivery or service shall apply plus the value added tax in the respective amount as determined by law.Invoice amounts are to be paid immediately without any deduction, decisive is the receipt at DW Lingual. If the Customer does not pay when due then interest is to be paid on the outstanding amounts from the day of maturity at a rate of 8 percentage points about the base lending rate p. a.; the assertion of higher interest and further damages in the event of the default remains unaffected.The offsetting against counter-claims of the Customer or the retention of payments owing to such claims is only permitted insofar as the counterclaims are undisputed or have been declared final and binding.DW Lingual is entitled to only carry out or to provide outstanding deliveries or services still against an advance payment or provision of collateral if circumstances become known after conclusion of the contract through which the payment of the outstanding claims of DW Lingual by the Customer from the respective contractual relationship is endangered.
      <br><br>
      <strong>§ 4 Delivery and delivery time</strong>
      <br>
      Deadlines and dates for deliveries and services as promised by DW Lingual describe the expected shipment date. Irrespective of the rights of DW Lingual from delay of the Customer – delivery and service deadlines shall be extended by the period of time in which the Customer does not satisfy its contractual obligations or responsibilities towards DW Lingual. The contractual responsibilities of the Customer shall also include the timely clarification of all details of the order. In case of the culpable non-adherence to a delivery date explicitly agreed in writing, DW Lingual shall only be deemed in default after the unsuccessful expiry of a reasonable final deadline set by the Customer in writing.
      <br><br>
      DW Lingual shall not be liable for the impossibility of the delivery or for delays in delivery insofar as these have been caused by force majeure or other events,which were not foreseeable at the time when the contract was concluded,for which DW Lingual was not responsible (e.g. interferences to operation of all kinds, difficulties in the procurement of materials, delays in transport or incorrect or late delivery by suppliers). Insofar as such events make the delivery or service substantially more difficult or render these impossible for DW Lingual, and the impediment is not just of a temporary duration, DW Lingual is entitled to cancel the contract. In case of impediments of a temporary duration, the delivery or service deadlines shall be extended or the delivery or service deadlines shall be postponed by the time of the impediment plus a reasonable start-up time. Insofar as the acceptance of the delivery or service is not deemed reasonable for the Customer as a result of the delay it can cancel the contract by an immediate written declaration.
      <br><br>
      <strong>§ 5 Passing of risk, shipment, packaging</strong>
      <br>
      The risk shall pass to the Customer no later than with the hand over of the object of delivery to the carrier, freight forwarder or other third party determined for execution of the shipment. If the shipment or the hand over is delayed as a result of a circumstance of which the cause lies with the Customer, the risk shall pass to the Customer from the day on which the object of delivery is ready for shipment and DW Lingual has reported this to the Customer. The type of shipment and the packaging are subject to the responsible discretion of DW Lingual. The costs for the shipment shall be borne by the Customer.Goods delivered by DW Lingual are to be treated as not sterile.
      <br><br>
      <strong>§ 6 Warranty, defects of quality</strong>
      <br>
      The accurate fit of the individual brackets is only guaranteed for the geometry of the set of teeth presented in the respective dental imprints. A silicon imprint is to be submitted for each jaw which is to be stuck, a plaster cast model is sufficient for counter-bites. If only one jaw is to be positioned it is nevertheless to be notified whether a treatment, if applicable also labial, is planned in the counter-jaw. Already available setup models are to be sent. All imprints and models are to be disinfected in full before shipment. The attending doctor has to examine the accuracy of the apparatus on the whole and of all of its parts, which at his instructions were produced by the supplier in special production and to assume the full responsibility for the whole duration of the treatment with the start of the treatment.
      <br><br>
      The delivered objects are to be examined carefully immediately after the delivery to the Customer or to the third party determined thereby. They shall be deemed as approved if DW Lingual has not received a written report of defects with regard to obvious defects or other defects, which were recognisable with an immediate, careful examination, within five workdays after delivery of the object of delivery or otherwise within five workdays after the discovery of the defect or each earlier time, at which the defect was recognisable for the Customer in case of normal use of the object of delivery without more detailed examination.
      <br><br>
      In case of defects of quality to the delivered objects DW Lingual is initially obliged and entitled to subsequent improvement or replacement delivery at its choice, which is to be made within a reasonable deadline. In the event of the failure, i.e. that the subsequent improvement or replacement delivery is impossible, deemed unreasonable, is refused or unreasonably delayed, the Customer can cancel the contract or reasonably reduce the purchase price. If a defect is due to the fault of DW Lingual, the Customer can request damages under the prerequisites determined in § 7. The warranty shall cease to apply if the Customer changes the object of delivery or has it changed by third parties without the consent of DW Lingual and the remedy of the defect become impossible or is made unreasonably more difficult hereby.
      <br><br>
      The warranty deadline is one year from delivery or, insofar as an acceptance is necessary, from the acceptance. The statute-of-limitations for claims of recourse according to §§ 478, 479 BGB remain unaffected.
      <br><br>
      <strong>§ 7 Liability for damages owing to fault</strong>
      <br>
      DW Lingual shall not be liable in the event of simple negligence of its bodies,legal representatives, employees or other vicarious agents insofar as it does not concern a breach of essential contractual duties. Essential for the contract are the obligation for the timely delivery of the object of delivery which is free of substantial defects as well as consultancy, protection and care duties, which should make it possible for the Customer to use the object of delivery as per contract or aim at the protection of life or body of personnel of the Customer or the protection of its property against substantial damages. Insofaras DW Lingual is liable for damages with respect to the reason this liability is limited to damages which DW Lingual foresaw as possible consequence ofa breach of contract upon conclusion of the contract or which it should have foreseen with the application of the customary due care and attention. Indirect damages and consequential damages, which are the result of defects to the object of delivery, are in addition only capable of compensation insofar as such damages are typically to be expected with the use of the object of delivery as intended. The afore-mentioned exclusions of and restrictions to liability shall apply in the same extent for the benefit of the bodies, legal representatives, employees and other vicarious agents of DW Lingual. The restrictions of this § 7 shall not apply to the liability of DW Lingual owing to wilful conduct, for guaranteed condition features, owing to the injury to life,the body or the health or according to the Product Liability Act.
      <br><br>
      Insofar as DW Lingual provides technical information or acts in an advisory capacity and this information or advice does not belong to the scope of services owed by it and agreed as per contract, this will take place free of charge and under the exclusion of all liability.
      <br><br>
      <strong>§ 8 Reservation of title</strong>
      <br>
      The goods delivered by DW Lingual shall remain the property of DW Lingual(“reserved goods”) until the full payment of all existing claims or claims incurred in future from the business relationship with the Customer. The Customer is entitled to process and to sell the reserved goods in proper business transactions until the occurrence of the sale case. Pledges and assignments as collateral are not permitted. The Customer hereby now already assigns claims from a sale or processing of the reserved goods as well as other claims, which replace the reserved goods, to DW Lingual, as a precautionary measure. If the Customer does not satisfy its contractual duties DW Lingual is entitled to request that the reserved goods are handed over. DW Lingual shall release the reserved goods as well as the objects or claims, which replace these, upon request and at its choice insofar as their value exceeds the amount of the secured claims by more than 50%.
      <br><br>
      <strong>§ 9 Data protection</strong>
      <br>
      The Customer is responsible for ensuring that the transmission of all order data, in particular of the personal health data, comply with the law applicable in the EU as well as the applicable laws of the country, in which the Customer is based. This is to be ensured by obtaining the consent of the patient after corresponding clarification or by issuing pseudonymity.
      <br><br>
      <strong>§ 10 Final provisions</strong>
      <br>
      The place of jurisdiction for all possible disputes from the business relationship between DW Lingual and the Customer is at the choice of DW Lingual Bad Essen or the registered seat of the Customer. Bad Essen is the exclusive place of jurisdiction for actions against DW Lingual. Mandatory statutory provisions concerning exclusive places of jurisdiction remain unaffected by this regulation.The relations between DW Lingual and the Customer are exclusively subject to the law of the Federal Republic of Germany. The Convention on the United Nations concerning contracts for the International Sale of Goods of 11 April1980 (CISG) shall not apply. Insofar as the contract or these General Business Terms contain loopholes in the regulations, those legally effective regulations shall be deemed as agreed in order to fill these loopholes which the contractual partners would have agreed according to the financial objectives of the contract and the purposeof these General Business Terms if they had been aware of the loophole in the regulations.
    `
  }
}
