// Devil Fruits Data with Language Support
const devilFruitsData = {
  ar: [
    {
      id: 1,
      name: "Gomu Gomu no Mi (هيتو هيتو نو مي، موديل: نيكا)",
      englishName: "Human-Human Fruit, Model: Nika",
      type: "زون أسطورية",
      user: "مونكي دي لوفي",
      description: "تمنح المستخدم جسد مطاطي وقدرات إله الشمس نيكا. القدرة على تحويل البيئة المحيطة والخيال إلى واقع.",
      icon: "🍎",
      strengths: [
        "مقاوم للهجمات الحادة والكهربائية",
        "حرية تامة في الحركة والقتال",
        "قدرة على تحويل البيئة المحيطة",
        "شفاء سريع",
        "قوة هجومية عالية جداً"
      ],
      weaknesses: [
        "ضعف ضد الماء وحجر البحر",
        "استنزاف الطاقة في الشكل المفعل",
        "صعوبة التحكم في البداية",
        "يحتاج تدريب مكثف"
      ],
      stats: {
        attack: 10,
        defense: 8,
        tactical: 10,
        rarity: 10,
        combatImpact: 10
      }
    },
    {
      id: 2,
      name: "Yami Yami no Mi",
      englishName: "Dark-Dark Fruit",
      type: "لوجيا",
      user: "مارشال دي تيتش (اللحية السوداء)",
      description: "تمنح القدرة على إنشاء والتحكم في الظلام، وإلغاء قدرات فواكه الشيطان الأخرى عند اللمس.",
      icon: "🌑",
      strengths: [
        "إلغاء قدرات فواكه الشيطان",
        "امتصاص الهجمات",
        "جاذبية هائلة",
        "تحكم في الظلام",
        "قدرة على سحب الأعداء"
      ],
      weaknesses: [
        "عدم المناعة الطبيعية للهجمات",
        "زيادة الألم المُستقبل",
        "ضعف ضد الماء وحجر البحر",
        "يحتاج لمس مباشر لإلغاء القدرات"
      ],
      stats: {
        attack: 9,
        defense: 6,
        tactical: 10,
        rarity: 10,
        combatImpact: 9
      }
    },
    {
      id: 3,
      name: "Magu Magu no Mi",
      englishName: "Magma-Magma Fruit",
      type: "لوجيا",
      user: "ساكازوكي (أكاينو)",
      description: "تمنح القدرة على إنتاج والتحكم في الحمم البركانية. تعتبر أقوى قوة هجومية خام.",
      icon: "🌋",
      strengths: [
        "أعلى قوة هجومية خام",
        "تفوق على النار",
        "إذابة أي شيء تقريباً",
        "مناعة ضد معظم الهجمات",
        "مدى واسع من الهجمات"
      ],
      weaknesses: [
        "خطر على المحيطين",
        "ضعف ضد الماء وحجر البحر",
        "استهلاك طاقة عالي",
        "صعوبة التحكم الدقيق"
      ],
      stats: {
        attack: 10,
        defense: 8,
        tactical: 7,
        rarity: 9,
        combatImpact: 9
      }
    },
    {
      id: 4,
      name: "Gura Gura no Mi",
      englishName: "Tremor-Tremor Fruit",
      type: "باراميسيا",
      user: "إدوارد نيوجيت (اللحية البيضاء) - سابقاً، اللحية السوداء - حالياً",
      description: "تمنح القدرة على إحداث الزلازل والهزات الأرضية. يمكنها تدمير العالم.",
      icon: "💥",
      strengths: [
        "قوة تدميرية هائلة",
        "تأثير على مساحات واسعة",
        "إحداث تسونامي",
        "كسر الهياكل والمباني",
        "هجمات بعيدة المدى"
      ],
      weaknesses: [
        "عدم الدقة في الهجمات",
        "خطر على الحلفاء",
        "ضعف ضد الماء وحجر البحر",
        "تدمير البيئة المحيطة"
      ],
      stats: {
        attack: 10,
        defense: 6,
        tactical: 6,
        rarity: 9,
        combatImpact: 10
      }
    },
    {
      id: 5,
      name: "Ope Ope no Mi",
      englishName: "Op-Op Fruit",
      type: "باراميسيا",
      user: "ترافالجار لو",
      description: "تخلق غرف يتحكم فيها المستخدم بكل شيء. تسمى الفاكهة المطلقة.",
      icon: "💙",
      strengths: [
        "تحكم مطلق داخل الغرفة",
        "تبديل الشخصيات والأشياء",
        "جراحة دون ألم",
        "انتقال فوري",
        "هجمات داخلية مدمرة"
      ],
      weaknesses: [
        "محدودة بحجم الغرفة",
        "استهلاك طاقة عالي",
        "تحتاج مهارة طبية",
        "ضعف ضد الماء وحجر البحر"
      ],
      stats: {
        attack: 8,
        defense: 9,
        tactical: 10,
        rarity: 10,
        combatImpact: 9
      }
    },
    {
      id: 6,
      name: "Suna Suna no Mi",
      englishName: "Sand-Sand Fruit",
      type: "لوجيا",
      user: "كروكودايل",
      description: "تمنح القدرة على التحول إلى الرمال والتحكم بها، وتجفيف الأجسام والبيئة.",
      icon: "🏜️",
      strengths: [
        "تحكم كامل بالرمال",
        "هجمات واسعة المدى",
        "قدرة على امتصاص الماء والتجفيف",
        "مناورة عالية في الصحراء"
      ],
      weaknesses: [
        "ضعف ضد الماء",
        "فقدان الصلابة عند ابتلال الرمال",
        "ضعف ضد حجر البحر"
      ],
      stats: {
        attack: 8,
        defense: 7,
        tactical: 8,
        rarity: 8,
        combatImpact: 8
      }
    },
    {
      id: 7,
      name: "Mera Mera no Mi",
      englishName: "Flame-Flame Fruit",
      type: "لوجيا",
      user: "بورتغاس دي إيس (سابقاً)، سابو (حالياً)",
      description: "تمنح القدرة على التحول إلى النار وإنشائها والتحكم بها.",
      icon: "🔥",
      strengths: [
        "سرعة ومرونة عالية",
        "قوة هجومية كبيرة",
        "مناعة ضد النار",
        "إطلاق نيران بعيدة المدى"
      ],
      weaknesses: [
        "ضعف ضد الماء وحجر البحر",
        "خطر على الحلفاء في الأماكن الضيقة",
        "تفوق الحمم على النار"
      ],
      stats: {
        attack: 9,
        defense: 7,
        tactical: 8,
        rarity: 8,
        combatImpact: 9
      }
    },
    {
      id: 8,
      name: "Hie Hie no Mi",
      englishName: "Ice-Ice Fruit",
      type: "لوجيا",
      user: "أوكيجي (كوزان)",
      description: "تمنح القدرة على إنتاج الجليد والتحكم به والتحول إليه.",
      icon: "❄️",
      strengths: [
        "تجميد الخصوم والبيئة",
        "إيقاف المحيطات مؤقتاً",
        "مناعة ضد البرودة والجليد",
        "مدى واسع للهجوم"
      ],
      weaknesses: [
        "ضعف ضد النار والحرارة العالية",
        "ضعف ضد الماء وحجر البحر",
        "استهلاك طاقة إذا استُخدم على مساحات هائلة"
      ],
      stats: {
        attack: 9,
        defense: 8,
        tactical: 9,
        rarity: 9,
        combatImpact: 9
      }
    },
    {
      id: 9,
      name: "Hito Hito no Mi",
      englishName: "Human-Human Fruit",
      type: "زون",
      user: "توني توني تشوبر",
      description: "تمنح القدرة على التحول إلى الإنسان والتفكير البشري.",
      icon: "🐒",
      strengths: [
        "ذكاء بشري",
        "تحول كامل أو جزئي",
        "زيادة القدرات البدنية"
      ],
      weaknesses: [
        "ضعف ضد الماء وحجر البحر",
        "لا قدرة هجومية خاصة"
      ],
      stats: {
        attack: 5,
        defense: 6,
        tactical: 7,
        rarity: 7,
        combatImpact: 6
      }
    },
    {
      id: 10,
      name: "Inu Inu no Mi, Model: Dachshund",
      englishName: "Dog-Dog Fruit, Model: Dachshund",
      type: "زون",
      user: "برنارد",
      description: "تمنح القدرة على التحول إلى كلب من نوع داشهند أو نصف كلب.",
      icon: "🐕",
      strengths: [
        "حواس قوية",
        "سرعة عالية",
        "قوة بدنية جيدة"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "حجم صغير"
      ],
      stats: {
        attack: 6,
        defense: 6,
        tactical: 5,
        rarity: 6,
        combatImpact: 5
      }
    },
    {
        id: 11,
      name: "Tori Tori no Mi, Model: Phoenix",
      englishName: "Bird-Bird Fruit, Model: Phoenix",
      type: "زون أسطورية",
      user: "ماركو",
      description: "تمنح القدرة على التحول إلى طائر العنقاء الأسطوري، مع قوة الشفاء والنار الزرقاء.",
      icon: "🐦‍⬛",
      strengths: [
        "شفاء ذاتي فائق",
        "طيران عالي السرعة",
        "هجمات نار زرقاء قوية",
        "مقاومة عالية"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "صعوبة الاستخدام لفترات طويلة"
      ],
      stats: {
        attack: 8,
        defense: 8,
        tactical: 8,
        rarity: 9,
        combatImpact: 9
      }
    },
    {
      id: 12,
      name: "Goro Goro no Mi",
      englishName: "Rumble-Rumble Fruit",
      type: "لوجيا",
      user: "إنيل",
      description: "تمنح القدرة على التحكم في الكهرباء وتحويل الجسم لكهرباء.",
      icon: "⚡",
      strengths: [
        "سرعة عالية جداً",
        "هجمات كهربائية قوية",
        "مناعة للهجمات الكهربائية",
        "تخفي وتحرك بسرعة"
      ],
      weaknesses: [
        "ضعف ضد عازل كهربائي",
        "ضعف أمام حجر البحر والماء"
      ],
      stats: {
        attack: 9,
        defense: 6,
        tactical: 8,
        rarity: 8,
        combatImpact: 8
      }
    },
    {
      id: 13,
      name: "Bomu Bomu no Mi",
      englishName: "Bomb-Bomb Fruit",
      type: "باراميسيا",
      user: "ماكينو",
      description: "تجعل جسم المستخدم قادر على التفجر دون أي ضرر له.",
      icon: "💣",
      strengths: [
        "تفجيرات مدمرة",
        "مناعة ضد الانفجارات الخاصة به",
        "مدى هجومي واسع"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "محدودية في التنقل أثناء الانفجارات"
      ],
      stats: {
        attack: 8,
        defense: 7,
        tactical: 7,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 14,
      name: "Doku Doku no Mi",
      englishName: "Venom-Venom Fruit",
      type: "باراميسيا",
      user: "موريا",
      description: "تمكن المستخدم من إنتاج والتحكم في السموم بأنواعها المختلفة.",
      icon: "☠️",
      strengths: [
        "سموم قاتلة",
        "تحكم بالسموم عبر الروح",
        "درجة عالية من المقاومة للسموم"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "تعرض المستخدم لأضرار إذا استُخدم بشكل خاطئ"
      ],
      stats: {
        attack: 8,
        defense: 7,
        tactical: 9,
        rarity: 7,
        combatImpact: 8
      }
    },
    {
      id: 15,
      name: "Ito Ito no Mi",
      englishName: "String-String Fruit",
      type: "باراميسيا",
      user: "دوفر اوينت",
      description: "تمنح القدرة على إنشاء والتحكم في الخيوط القوية.",
      icon: "🧵",
      strengths: [
        "خيوط قوية جداً",
        "تحكم واسع في الهجمات والدفاع",
        "إمكانية التحكم عن بعد"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "تحتاج في بعض الأحيان إلى وقت لإعادة التركيب"
      ],
      stats: {
        attack: 7,
        defense: 7,
        tactical: 9,
        rarity: 8,
        combatImpact: 8
     }
    },
    {
        id: 16,
      name: "Toge Toge no Mi",
      englishName: "Spike-Spike Fruit",
      type: "باراميسيا",
      user: "ميهوك فينسمور",
      description: "تُمكّن المستخدم من إنتاج أشواك حادة من جسمه.",
      icon: "🦔",
      strengths: [
        "هجمات قاسية بالأشواك",
        "دفاع متين ضد الهجوم البدني",
        "مناورة جيدة"
      ],
      weaknesses: [
        "ضعف ضد الماء وحجر البحر",
        "قد يكون مستخدمها عرضة لهجمات بعيدة"
      ],
      stats: {
        attack: 7,
        defense: 7,
        tactical: 7,
        rarity: 6,
        combatImpact: 7
      }
    },
    {
      id: 17,
      name: "Mochi Mochi no Mi",
      englishName: "Mochi-Mochi Fruit",
      type: "باراميسيا",
      user: "دايزو",
      description: "تسمح للمستخدم بإنتاج ومناورة مادة مشابهة للموتشي (العجين اللزج).",
      icon: "🍡",
      strengths: [
        "مواد لزجة ومرنة للغاية",
        "قدرة على تشكيل الهجمات والدفاعات",
        "تجنب العديد من الهجمات بسهولة"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "قابلية التصلب عند التعرض لدرجات حرارة منخفضة"
      ],
      stats: {
        attack: 8,
        defense: 7,
        tactical: 8,
        rarity: 7,
        combatImpact: 8
      }
    },
    {
      id: 18,
      name: "Hana Hana no Mi",
      englishName: "Flower-Flower Fruit",
      type: "باراميسيا",
      user: "نيكو روبين",
      description: "تُمكّن المستخدم من إنماء أجزاء من جسده من أي سطح حوله.",
      icon: "🌸",
      strengths: [
        "تحكم في أجزاء كثيرة من الجسم في آن واحد",
        "قدرات تجسس ومهاجمة عالية",
        "مرونة كبيرة في القتال"
      ],
      weaknesses: [
        "ضعف ضد الماء وحجر البحر",
        "عدم وجود قدرة هجومية مباشرة"
      ],
      stats: {
        attack: 7,
        defense: 6,
        tactical: 9,
        rarity: 8,
        combatImpact: 7
      }
    },
    {
      id: 19,
      name: "Nikyu Nikyu no Mi",
      englishName: "Paw-Paw Fruit",
      type: "باراميسيا",
      user: "بارثولوميو كوما",
      description: "تسمح للمستخدم بدفع أي شيء يلمسه بسرعات هائلة.",
      icon: "🐾",
      strengths: [
        "تحكم في الدفع والارتداد",
        "سرعة عالية في الهجمات والتنقل",
        "إمكانية صد هجمات الأعداء"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "قيود في استخدام الطاقات الكبيرة"
      ],
      stats: {
        attack: 8,
        defense: 7,
        tactical: 8,
        rarity: 8,
        combatImpact: 8
      }
    },
    {
      id: 20,
      name: "Sube Sube no Mi",
      englishName: "Slip-Slip Fruit",
      type: "باراميسيا",
      user: "أمسون",
      description: "تجعل جسم المستخدم أملسًا جدًا بحيث تنزلق عليه الهجمات بلا تأثير.",
      icon: "🦎",
      strengths: [
        "مناعة ضد الهجمات البدنية",
        "تكتيكات تنقل وتفادي عالية",
        "زيادة في المقاومة الجسدية"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "لا قدرة هجومية مباشرة"
      ],
      stats: {
        attack: 6,
        defense: 9,
        tactical: 8,
        rarity: 7,
        combatImpact: 6
      }
    },
    {
         id: 21,
      name: "Ori Ori no Mi",
      englishName: "Bind-Bind Fruit",
      type: "باراميسيا",
      user: "بابي",
      description: "تمكن المستخدم من إنشاء قيود قوية يمكن استخدامها لتقييد الأعداء.",
      icon: "⛓️",
      strengths: [
        "قيود قوية صعبة الكسر",
        "تحكم كبير في الخصم",
        "مفيدة في المعارك القريبة"
      ],
      weaknesses: [
        "غير ملائمة للهجوم بعيد المدى",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 6,
        defense: 7,
        tactical: 8,
        rarity: 6,
        combatImpact: 6
      }
    },
    {
      id: 22,
      name: "Kilo Kilo no Mi",
      englishName: "Kilo-Kilo Fruit",
      type: "باراميسيا",
      user: "فوجيتورا",
      description: "يتيح للمستخدم تغيير وزنه بين 1 كغ إلى 10 أطنان.",
      icon: "⚖️",
      strengths: [
        "تغيير الوزن لزيادة القوة أو التنقل",
        "تحكم في سرعة الهجمات والضربات",
        "زيادة في المقاومة أو الهجوم حسب الوزن"
      ],
      weaknesses: [
        "تغيير الوزن مفيد لكنه محدود",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 7,
        defense: 8,
        tactical: 7,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 23,
      name: "Soru Soru no Mi",
      englishName: "Soul-Soul Fruit",
      type: "باراميسيا",
      user: "سيتشيبونغو",
      description: "تمكن المستخدم من التلاعب بالأرواح، نقل الأرواح، وجعل الأشياء تتحرك بفعل الروح.",
      icon: "👻",
      strengths: [
        "تحكم في الأرواح والتحكم بالأعداء",
        "إحداث تأثير نفسي",
        "هجمات غير مادية"
      ],
      weaknesses: [
        "تعقيد في التحكم بالأرواح",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 8,
        defense: 6,
        tactical: 9,
        rarity: 8,
        combatImpact: 8
      }
    },
    {
      id: 24,
      name: "Bara Bara no Mi",
      englishName: "Chop-Chop Fruit",
      type: "باراميسيا",
      user: "باجي",
      description: "تمكن المستخدم من تفكيك جسده إلى قطع منفصلة عن بعض دون أن يتأذى وكذلك التحكم بها.",
      icon: "✂️",
      strengths: [
        "التحكم الكامل في قطع الجسم",
        "منع الضرر من الهجمات المباشرة",
        "مرونة في الهجوم والتنقل"
      ],
      weaknesses: [
        "تأثر عند الوصول الى الماء وحجر البحر",
        "تقييد المعارك المزدحمة"
      ],
      stats: {
        attack: 7,
        defense: 7,
        tactical: 8,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 25,
      name: "Doru Doru no Mi",
      englishName: "Wax-Wax Fruit",
      type: "باراميسيا",
      user: "مونجايانا",
      description: "تمكن المستخدم من إنتاج الشمع بأشكال مختلفة واستخدامه في القتال أو البناء.",
      icon: "🕯️",
      strengths: [
        "تشكيل مكامن دفاعية وهجومية",
        "إمكانية استخدام الشمع كدرع",
        "إمكانية تشكيل هجمات معقدة"
      ],
      weaknesses: [
        "ضعف أمام الحرارة العالية وإذابة الشمع",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 6,
        defense: 7,
        tactical: 7,
        rarity: 6,
        combatImpact: 6
     }
    },
    {
         id: 26,
      name: "Gasu Gasu no Mi",
      englishName: "Gas-Gas Fruit",
      type: "باراميسيا",
      user: "سموكر",
      description: "تمكن المستخدم من إنتاج والتحكم في الغازات السامة والخطرة.",
      icon: "☁️",
      strengths: [
        "تأثيرات سامة ومدمرة",
        "قدرة على التلاشي والاختفاء",
        "إمكانية التحكم في البيئة"
      ],
      weaknesses: [
        "ضعف أمام الرياح الشديدة",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 8,
        defense: 6,
        tactical: 8,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 27,
      name: "Noro Noro no Mi",
      englishName: "Slow-Slow Fruit",
      type: "باراميسيا",
      user: "فرانكي",
      description: "تمكن المستخدم من تبطئة الحركة والأشياء المحيطة به لفترات قصيرة.",
      icon: "🐌",
      strengths: [
        "التحكم في إبطاء الأعداء",
        "إتاحة فرص للهجوم المضاد",
        "تكتيكات الدفاع والهجوم"
      ],
      weaknesses: [
        "مدى التأثير قصير",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 7,
        defense: 7,
        tactical: 8,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 28,
      name: "Bari Bari no Mi",
      englishName: "Barrier-Barrier Fruit",
      type: "باراميسيا",
      user: "ديدي",
      description: "تمكن المستخدم من إنشاء دروع وحواجز قوية لا تخترق بسهولة.",
      icon: "🛡️",
      strengths: [
        "حصانة عالية للدفاع",
        "قدرة على حماية الآخرين",
        "إمكانية تغطية مساحة واسعة"
      ],
      weaknesses: [
        "لا قدرة هجومية مباشرة",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 5,
        defense: 10,
        tactical: 7,
        rarity: 7,
        combatImpact: 6
      }
    },
    {
      id: 29,
      name: "Mero Mero no Mi",
      englishName: "Love-Love Fruit",
      type: "باراميسيا",
      user: "بوا هانكوك",
      description: "تمكن المستخدم من تحويل من يحسده أو يكرهه إلى حجر.",
      icon: "💗",
      strengths: [
        "تحويل الأعداء إلى حجر",
        "جاذبية قوية للخصوم",
        "قدرات دفاعية وهجومية متنوعة"
      ],
      weaknesses: [
        "لا يعمل على من لا يشعر بالإعجاب",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 7,
        defense: 7,
        tactical: 9,
        rarity: 8,
        combatImpact: 8
      }
    },
    {
      id: 30,
      name: "Yuki Yuki no Mi",
      englishName: "Snow-Snow Fruit",
      type: "لوجيا",
      user: "ميهوك",
      description: "تمكن المستخدم من إنتاج وتحكم بالجليد والثلج.",
      icon: "⛄",
      strengths: [
        "تجميد الأعداء والبيئة",
        "إمكانيات هجومية ودفاعية كبيرة",
        "مناعة ضد البرد والثلج"
      ],
      weaknesses: [
        "ضعف أمام النيران والحرارة",
        "ضعف أمام الماء وحجر البحر"
      ],
      stats: {
        attack: 8,
        defense: 8,
        tactical: 8,
        rarity: 7,
        combatImpact: 7
       }
    },
    {
           id: 31,
      name: "Gasha Gasha no Mi",
      englishName: "Crack-Crack Fruit",
      type: "باراميسيا",
      user: "كابوني",
      description: "تمكن المستخدم من تفكيك وإعادة تركيب الأشياء بحرية.",
      icon: "🔧",
      strengths: [
        "تفكيك الأشياء بسرعة",
        "إعادة تركيب الأشياء بأي شكل",
        "قدرة على تشكيل أسلحة وأدوات"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "تحتاج إلى مهارة عالية في الاستخدام"
      ],
      stats: {
        attack: 7,
        defense: 6,
        tactical: 8,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 32,
      name: "Baku Baku no Mi",
      englishName: "Munch-Munch Fruit",
      type: "باراميسيا",
      user: "والين",
      description: "تمكن المستخدم من ابتلاع ودمج أي مادة في جسمه.",
      icon: "🍽️",
      strengths: [
        "امتصاص قدرات المواد المبتلعة",
        "زيادة القوة حسب المادة",
        "تكتيكات هجومية متنوعة"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "تحتاج إلى تحمل جسدي عالي"
      ],
      stats: {
        attack: 7,
        defense: 7,
        tactical: 7,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 33,
      name: "Suke Suke no Mi",
      englishName: "Clear-Clear Fruit",
      type: "باراميسيا",
      user: "فوكورودا",
      description: "تمكن المستخدم من جعل جسمه وأشياء أخرى شفافة وغير مرئية.",
      icon: "👻",
      strengths: [
        "اختفاء تام",
        "مفاجأة الأعداء",
        "مناورة عالية في المعارك"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "غير ملائم للهجوم المباشر"
      ],
      stats: {
        attack: 6,
        defense: 6,
        tactical: 9,
        rarity: 7,
        combatImpact: 6
      }
    },
    {
      id: 34,
      name: "Ushi Ushi no Mi, Model: Bison",
      englishName: "Ox-Ox Fruit, Model: Bison",
      type: "زون",
      user: "دانبوك",
      description: "تمكن المستخدم من التحول إلى بيزون قوي صاحب قوة بدنية هائلة.",
      icon: "🐂",
      strengths: [
        "قوة بدنية عالية",
        "تحمل قوي ضد الهجمات",
        "سرعة وحركة مفاجئة"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "صعوبة في المشي في المناطق الضيقة"
      ],
      stats: {
        attack: 8,
        defense: 8,
        tactical: 6,
        rarity: 7,
        combatImpact: 7
      }
    },
    {
      id: 35,
      name: "Mogu Mogu no Mi",
      englishName: "Mole-Mole Fruit",
      type: "زون",
      user: "دوغو",
      description: "تمكن المستخدم من التحول إلى خلد، القدرة على الحفر السريع وخفة الحركة تحت الأرض.",
      icon: "🐾",
      strengths: [
        "سرعة الحفر والتحرك تحت الأرض",
        "تجنب الهجمات المباشرة",
        "هجمات مفاجئة"
      ],
      weaknesses: [
        "ضعف أمام الماء وحجر البحر",
        "عجز عن الحركة فوق الأرض بسرعة عالية"
      ],
      stats: {
        attack: 7,
        defense: 6,
        tactical: 7,
        rarity: 6,
        combatImpact: 6
      }
    }
  ]
};
    en: [
        {
            "id": 1,
            "name": "Gomu Gomu no Mi (Hito Hito no Mi, Model: Nika)",
            "englishName": "Human-Human Fruit, Model: Nika",
            "type": "Mythical Zoan",
            "user": "Monkey D. Luffy",
            "description": "Grants the user a rubber body and the powers of Sun God Nika. Ability to turn imagination and environment into reality.",
            "icon": "🍎",
            "strengths": [
                "Immune to sharp and electrical attacks",
                "Complete freedom in movement and combat",
                "Ability to transform the environment",
                "Rapid healing",
                "Extremely high offensive power"
            ],
            "weaknesses": [
                "Weak against water and Sea-Prism Stone",
                "Energy drain in awakened form",
                "Difficult to control initially",
                "Requires intensive training"
            ],
            "stats": {
                "attack": 10,
                "defense": 8,
                "tactical": 10,
                "rarity": 10,
                "combatImpact": 10
            }
        },
        {
            "id": 2,
            "name": "Yami Yami no Mi",
            "englishName": "Dark-Dark Fruit",
            "type": "Logia",
            "user": "Marshall D. Teach (Blackbeard)",
            "description": "Grants the ability to create and control darkness, and cancel other Devil Fruit abilities upon touch.",
            "icon": "🌑",
            "strengths": [
                "Cancels Devil Fruit abilities",
                "Absorbs attacks",
                "Immense gravity",
                "Controls darkness",
                "Ability to pull enemies"
            ],
            "weaknesses": [
                "No natural immunity to attacks",
                "Increased pain reception",
                "Weak against water and Sea-Prism Stone",
                "Requires direct touch to cancel abilities"
            ],
            "stats": {
                "attack": 9,
                "defense": 6,
                "tactical": 10,
                "rarity": 10,
                "combatImpact": 9
            }
        },
        {
            "id": 3,
            "name": "Magu Magu no Mi",
            "englishName": "Magma-Magma Fruit",
            "type": "Logia",
            "user": "Sakazuki (Akainu)",
            "description": "Grants the ability to produce and control volcanic magma. Considered the highest raw offensive power.",
            "icon": "🌋",
            "strengths": [
                "Highest raw offensive power",
                "Superior to fire",
                "Melts almost anything",
                "Immunity against most attacks",
                "Wide range of attacks"
            ],
            "weaknesses": [
                "Dangerous to surroundings",
                "Weak against water and Sea-Prism Stone",
                "High energy consumption",
                "Difficult precise control"
            ],
            "stats": {
                "attack": 10,
                "defense": 8,
                "tactical": 7,
                "rarity": 9,
                "combatImpact": 9
            }
        },
        {
            "id": 4,
            "name": "Gura Gura no Mi",
            "englishName": "Tremor-Tremor Fruit",
            "type": "Paramecia",
            "user": "Edward Newgate (Whitebeard) - formerly, Blackbeard - currently",
            "description": "Grants the ability to cause earthquakes and tremors. Can destroy the world.",
            "icon": "💥",
            "strengths": [
                "Immense destructive power",
                "Wide area effect",
                "Causes tsunamis",
                "Breaks structures and buildings",
                "Long-range attacks"
            ],
            "weaknesses": [
                "Lacks precision in attacks",
                "Dangerous to allies",
                "Weak against water and Sea-Prism Stone",
                "Destroys surrounding environment"
            ],
            "stats": {
                "attack": 10,
                "defense": 6,
                "tactical": 6,
                "rarity": 9,
                "combatImpact": 10
            }
        },
        {
            "id": 5,
            "name": "Ope Ope no Mi",
            "englishName": "Op-Op Fruit",
            "type": "Paramecia",
            "user": "Trafalgar Law",
            "description": "Creates rooms where the user controls everything. Called the Ultimate Devil Fruit.",
            "icon": "💙",
            "strengths": [
                "Absolute control within room",
                "Switches personalities and objects",
                "Painless surgery",
                "Instant teleportation",
                "Devastating internal attacks"
            ],
            "weaknesses": [
                "Limited by room size",
                "High energy consumption",
                "Requires medical skill",
                "Weak against water and Sea-Prism Stone"
            ],
            "stats": {
                "attack": 8,
                "defense": 9,
                "tactical": 10,
                "rarity": 10,
                "combatImpact": 9
            }
        }
    ]


// Interface translations
const interfaceData = {
    ar: {
        "title": "⚔️ مقارنة فواكه الشيطان ⚔️",
        "subtitle": "اكتشف قوة فواكه الشيطان في عالم ون بيس",
        "searchPlaceholder": "ابحث عن فاكهة الشيطان...",
        "filterAll": "الكل",
        "filterParamecia": "باراميسيا",
        "filterLogia": "لوجيا",
        "filterZoan": "زون",
        "compareButton": "مقارنة الفواكه",
        "resetButton": "إعادة تعيين",
        "addToCompare": "إضافة للمقارنة",
        "removeFromCompare": "إزالة من المقارنة",
        "strengths": "نقاط القوة",
        "weaknesses": "نقاط الضعف",
        "stats": "الإحصائيات",
        "attack": "القوة الهجومية",
        "defense": "الدفاع",
        "tactical": "الاستعمال التكتيكي",
        "rarity": "الندرة",
        "combatImpact": "التأثير في القتال",
        "comparisonTitle": "🆚 مقارنة فواكه الشيطان",
        "winner": "الفائز",
        "close": "إغلاق",
        "selectedFruits": "الفواكه المحددة للمقارنة:",
        "user": "المستخدم:",
        "description": "الوصف",
        "noResults": "لم يتم العثور على فواكه شيطان تطابق البحث",
        "minComparison": "يجب اختيار فاكهتين على الأقل للمقارنة",
        "maxComparison": "يمكن مقارنة 4 فواكه شيطان كحد أقصى",
        "criterion": "المعيار",
        "total": "الإجمالي",
        "langSwitch": "English"
    },
    en: {
        "title": "⚔️ Devil Fruits Comparison ⚔️",
        "subtitle": "Discover the power of Devil Fruits in One Piece world",
        "searchPlaceholder": "Search for Devil Fruit...",
        "filterAll": "All",
        "filterParamecia": "Paramecia",
        "filterLogia": "Logia",
        "filterZoan": "Zoan",
        "compareButton": "Compare Fruits",
        "resetButton": "Reset",
        "addToCompare": "Add to Compare",
        "removeFromCompare": "Remove from Compare",
        "strengths": "Strengths",
        "weaknesses": "Weaknesses",
        "stats": "Statistics",
        "attack": "Attack Power",
        "defense": "Defense",
        "tactical": "Tactical Use",
        "rarity": "Rarity",
        "combatImpact": "Combat Impact",
        "comparisonTitle": "🆚 Devil Fruits Comparison",
        "winner": "Winner",
        "close": "Close",
        "selectedFruits": "Selected Fruits for Comparison:",
        "user": "User:",
        "description": "Description",
        "noResults": "No Devil Fruits found matching your search",
        "minComparison": "Please select at least 2 fruits to compare",
        "maxComparison": "You can compare up to 4 Devil Fruits maximum",
        "criterion": "Criterion",
        "total": "Total",
        "langSwitch": "العربية"
    }
};

// Global Variables
let currentLanguage = 'ar';
let filteredFruits = [];
let comparisonList = [];
let currentFilter = 'all';
let searchTerm = '';

// DOM Elements
let searchInput, filterButtons, fruitsGrid, comparisonCounter, counterNumber;
let compareBtn, resetBtn, fruitModal, comparisonModal, languageToggle;

// Initialize DOM Elements
function initializeDOMElements() {
    searchInput = document.getElementById('searchInput');
    filterButtons = document.querySelectorAll('.filter-btn');
    fruitsGrid = document.getElementById('fruitsGrid');
    comparisonCounter = document.getElementById('comparisonCounter');
    counterNumber = document.getElementById('counterNumber');
    compareBtn = document.getElementById('compareBtn');
    resetBtn = document.getElementById('resetBtn');
    fruitModal = document.getElementById('fruitModal');
    comparisonModal = document.getElementById('comparisonModal');
    languageToggle = document.getElementById('languageToggle');
}

// Get current fruits data based on language
function getCurrentFruits() {
    return devilFruitsData[currentLanguage] || devilFruitsData.ar;
}

// Get current interface text based on language
function getCurrentInterface() {
    return interfaceData[currentLanguage] || interfaceData.ar;
}

// Normalize text for better search (Arabic and English)
function normalizeText(text) {
    return text.toLowerCase()
        .replace(/أ|إ|آ/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ي/g, 'ى')
        .replace(/\s+/g, ' ')
        .trim();
}

// Language switching functionality
function switchLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // Update HTML attributes
    const html = document.documentElement;
    html.lang = currentLanguage;
    html.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update document title
    document.title = currentLanguage === 'ar' 
        ? 'مقارنة فواكه الشيطان - ون بيس' 
        : 'Devil Fruits Comparison - One Piece';
    
    // Update all interface elements
    updateInterface();
    
    // Reset filters and search for consistency
    resetFiltersAndSearch();
    
    // Re-render everything
    filteredFruits = getCurrentFruits();
    renderFruits();
    updateComparisonCounter();
    
    // Add transition animation
    document.body.classList.add('language-transition');
    setTimeout(() => document.body.classList.remove('language-transition'), 500);
    
    console.log('Language switched to:', currentLanguage);
}

// Update interface elements with current language
function updateInterface() {
    const ui = getCurrentInterface();
    
    // Update main elements
    updateElement('mainTitle', ui.title);
    updateElement('subtitle', ui.subtitle);
    updateElement('langText', ui.langSwitch);
    
    // Update search placeholder
    if (searchInput) {
        searchInput.placeholder = ui.searchPlaceholder;
    }
    
    // Update filter buttons
    updateElement('filterAll', ui.filterAll);
    updateElement('filterParamecia', ui.filterParamecia);
    updateElement('filterLogia', ui.filterLogia);
    updateElement('filterZoan', ui.filterZoan);
    
    // Update comparison buttons
    if (compareBtn) compareBtn.textContent = ui.compareButton;
    if (resetBtn) resetBtn.textContent = ui.resetButton;
    
    // Update counter text
    updateElement('counterText', ui.selectedFruits + ' ');
    
    // Update modal elements
    updateElement('descriptionTitle', ui.description);
    updateElement('statsTitle', ui.stats);
    updateElement('attackLabel', ui.attack);
    updateElement('defenseLabel', ui.defense);
    updateElement('tacticalLabel', ui.tactical);
    updateElement('rarityLabel', ui.rarity);
    updateElement('combatLabel', ui.combatImpact);
    updateElement('strengthsTitle', `✅ ${ui.strengths}`);
    updateElement('weaknessesTitle', `❌ ${ui.weaknesses}`);
    updateElement('closeBtn', ui.close);
    updateElement('comparisonTitle', ui.comparisonTitle);
}

// Helper function to update element text content
function updateElement(id, text) {
    const element = document.getElementById(id);
    if (element) {
        if (id === 'counterText') {
            element.innerHTML = text + '<span id="counterNumber">' + comparisonList.length + '</span>';
        } else {
            element.textContent = text;
        }
    }
}

// Reset filters and search when switching language
function resetFiltersAndSearch() {
    currentFilter = 'all';
    searchTerm = '';
    
    // Reset search input
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset filter buttons
    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'all') {
                btn.classList.add('active');
            }
        });
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize DOM elements
    initializeDOMElements();
    
    // Set initial data
    filteredFruits = getCurrentFruits();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize interface
    updateInterface();
    
    // Render initial content
    renderFruits();
    updateComparisonCounter();
    
    console.log('App initialized successfully');
});

// Event Listeners Setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Language toggle
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Language toggle clicked');
            switchLanguage();
        });
        console.log('Language toggle event listener added');
    } else {
        console.error('Language toggle button not found');
    }
    
    // Search functionality
    if (searchInput) {
        const handleSearch = function(e) {
            searchTerm = normalizeText(e.target.value);
            filterAndRenderFruits();
        };
        
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keyup', handleSearch);
        searchInput.addEventListener('change', handleSearch);
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchTerm = normalizeText(e.target.value);
                filterAndRenderFruits();
            }
        });
        console.log('Search event listeners added');
    }
    
    // Filter buttons
    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilter);
        });
        console.log('Filter button event listeners added');
    }
    
    // Comparison buttons
    if (compareBtn) {
        compareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Compare button clicked');
            showComparisonModal();
        });
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetComparison();
        });
    }
    
    // Modal close buttons
    document.querySelectorAll('.modal-close, .modal-close-btn').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            closeModals();
        });
    });
    
    // Modal overlay close
    document.querySelectorAll('.modal-overlay').forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModals();
            }
        });
    });
    
    // Search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (searchInput) {
                searchTerm = normalizeText(searchInput.value);
                filterAndRenderFruits();
            }
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModals();
        }
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
    
    console.log('All event listeners set up');
}

// Filter Handler
function handleFilter(e) {
    e.preventDefault();
    console.log('Filter clicked:', e.target.dataset.filter);
    
    if (filterButtons) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
    }
    e.target.classList.add('active');
    
    const filterValue = e.target.dataset.filter;
    currentFilter = filterValue;
    filterAndRenderFruits();
}

// Filter and Render Fruits
function filterAndRenderFruits() {
    const fruits = getCurrentFruits();
    console.log('Filtering fruits, total:', fruits.length);
    
    filteredFruits = fruits.filter(fruit => {
        const normalizedName = normalizeText(fruit.name);
        const normalizedUser = normalizeText(fruit.user);
        const normalizedEnglishName = normalizeText(fruit.englishName);
        const normalizedDescription = normalizeText(fruit.description);
        const normalizedType = normalizeText(fruit.type);
        
        const matchesSearch = searchTerm === '' || 
                            normalizedName.includes(searchTerm) || 
                            normalizedUser.includes(searchTerm) ||
                            normalizedEnglishName.includes(searchTerm) ||
                            normalizedDescription.includes(searchTerm) ||
                            normalizedType.includes(searchTerm);
        
        // Handle filter mapping between languages
        let matchesFilter = currentFilter === 'all';
        if (!matchesFilter) {
            const typeMapping = {
                'Paramecia': ['باراميسيا', 'Paramecia'],
                'Logia': ['لوجيا', 'Logia'], 
                'Zoan': ['زون', 'Zoan', 'زون أسطورية', 'Mythical Zoan']
            };
            
            for (const [key, values] of Object.entries(typeMapping)) {
                if (currentFilter === key || values.includes(currentFilter)) {
                    matchesFilter = values.some(type => fruit.type.includes(type));
                    break;
                }
            }
        }
        
        return matchesSearch && matchesFilter;
    });
    
    console.log('Filtered fruits:', filteredFruits.length);
    renderFruits();
}

// Render Fruits Grid
function renderFruits() {
    const ui = getCurrentInterface();
    console.log('Rendering fruits grid...');
    
    if (!fruitsGrid) {
        console.error('Fruits grid element not found');
        return;
    }
    
    if (filteredFruits.length === 0) {
        fruitsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-secondary); font-size: 1.2rem;">
                🔍 ${ui.noResults} "${searchInput ? searchInput.value : searchTerm}"
            </div>
        `;
        return;
    }
    
    fruitsGrid.innerHTML = filteredFruits.map(fruit => `
        <div class="fruit-card ${comparisonList.includes(fruit.id) ? 'in-comparison' : ''}" 
             data-fruit-id="${fruit.id}">
            <div class="fruit-card-header">
                <div class="fruit-card-icon">${fruit.icon}</div>
                <div class="fruit-card-info">
                    <div class="fruit-name">${fruit.name}</div>
                    <div class="fruit-user">${ui.user} ${fruit.user}</div>
                    <span class="fruit-type-badge type-${fruit.type.replace(/\s+/g, '-')}">${fruit.type}</span>
                </div>
            </div>
            <div class="fruit-description">${fruit.description}</div>
            <div class="fruit-actions">
                <button class="btn btn--sm ${comparisonList.includes(fruit.id) ? 'btn--secondary' : 'btn--primary'}" 
                        onclick="window.toggleComparison(event, ${fruit.id})">
                    ${comparisonList.includes(fruit.id) ? ui.removeFromCompare : ui.addToCompare}
                </button>
            </div>
        </div>
    `).join('');
    
    // Add click event listeners to fruit cards
    document.querySelectorAll('.fruit-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            const fruitId = parseInt(this.dataset.fruitId);
            console.log('Fruit card clicked, ID:', fruitId);
            showFruitDetails(fruitId);
        });
    });
    
    console.log('Fruits rendered successfully');
}

// Show Fruit Details Modal
function showFruitDetails(fruitId) {
    console.log('Showing fruit details for ID:', fruitId);
    
    const fruits = getCurrentFruits();
    const fruit = fruits.find(f => f.id === fruitId);
    const ui = getCurrentInterface();
    
    if (!fruit) {
        console.error('Fruit not found:', fruitId);
        return;
    }
    
    console.log('Found fruit:', fruit.name);
    
    // Populate modal with fruit data
    updateElement('modalFruitName', fruit.name);
    updateElement('modalFruitUser', `${ui.user} ${fruit.user}`);
    updateElement('modalFruitDescription', fruit.description);
    
    // Update fruit icon
    const modalFruitIcon = document.getElementById('modalFruitIcon');
    if (modalFruitIcon) {
        modalFruitIcon.textContent = fruit.icon;
    }
    
    // Update fruit type badge
    const modalFruitType = document.getElementById('modalFruitType');
    if (modalFruitType) {
        modalFruitType.textContent = fruit.type;
        modalFruitType.className = `fruit-type-badge type-${fruit.type.replace(/\s+/g, '-')}`;
    }
    
    // Populate stats
    const stats = ['attack', 'defense', 'tactical', 'rarity', 'combatImpact'];
    stats.forEach((stat) => {
        const value = fruit.stats[stat];
        const statElement = document.getElementById(stat + 'Stat');
        const valueElement = document.getElementById(stat + 'Value');
        if (statElement) {
            statElement.style.width = (value * 10) + '%';
        }
        if (valueElement) {
            valueElement.textContent = value;
        }
    });
    
    // Populate strengths
    const strengthsList = document.getElementById('modalStrengths');
    if (strengthsList) {
        strengthsList.innerHTML = fruit.strengths.map(strength => `<li>${strength}</li>`).join('');
    }
    
    // Populate weaknesses
    const weaknessesList = document.getElementById('modalWeaknesses');
    if (weaknessesList) {
        weaknessesList.innerHTML = fruit.weaknesses.map(weakness => `<li>${weakness}</li>`).join('');
    }
    
    // Update add to compare button
    const addToCompareBtn = document.getElementById('addToCompareBtn');
    if (addToCompareBtn) {
        if (comparisonList.includes(fruit.id)) {
            addToCompareBtn.textContent = ui.removeFromCompare;
            addToCompareBtn.className = 'btn btn--secondary';
        } else {
            addToCompareBtn.textContent = ui.addToCompare;
            addToCompareBtn.className = 'btn btn--primary';
        }
        
        addToCompareBtn.onclick = function() {
            window.toggleComparison(null, fruit.id);
        };
    }
    
    // Show modal
    if (fruitModal) {
        fruitModal.classList.remove('hidden');
        fruitModal.classList.add('show');
        console.log('Fruit modal shown');
    } else {
        console.error('Fruit modal element not found');
    }
}

// Toggle Comparison
window.toggleComparison = function(event, fruitId) {
    if (event) {
        event.stopPropagation();
    }
    
    console.log('Toggling comparison for fruit ID:', fruitId);
    
    const ui = getCurrentInterface();
    const fruitCard = document.querySelector(`[data-fruit-id="${fruitId}"]`);
    
    if (comparisonList.includes(fruitId)) {
        comparisonList = comparisonList.filter(id => id !== fruitId);
        if (fruitCard) {
            fruitCard.classList.remove('in-comparison');
        }
        console.log('Removed from comparison');
    } else {
        if (comparisonList.length >= 4) {
            alert(ui.maxComparison);
            return;
        }
        
        comparisonList.push(fruitId);
        if (fruitCard) {
            fruitCard.classList.add('in-comparison');
            fruitCard.classList.add('flash');
            setTimeout(() => fruitCard.classList.remove('flash'), 500);
        }
        console.log('Added to comparison');
    }
    
    updateComparisonCounter();
    renderFruits();
    
    // Update modal button if modal is open
    const addToCompareBtn = document.getElementById('addToCompareBtn');
    if (fruitModal && fruitModal.classList.contains('show') && addToCompareBtn) {
        if (comparisonList.includes(fruitId)) {
            addToCompareBtn.textContent = ui.removeFromCompare;
            addToCompareBtn.className = 'btn btn--secondary';
        } else {
            addToCompareBtn.textContent = ui.addToCompare;
            addToCompareBtn.className = 'btn btn--primary';
        }
    }
};

// Update Comparison Counter
function updateComparisonCounter() {
    const ui = getCurrentInterface();
    
    if (counterNumber) {
        counterNumber.textContent = comparisonList.length;
    }
    
    // Update counter text
    const counterText = document.getElementById('counterText');
    if (counterText) {
        counterText.innerHTML = ui.selectedFruits + ' <span id="counterNumber">' + comparisonList.length + '</span>';
    }
    
    if (comparisonCounter) {
        if (comparisonList.length > 0) {
            comparisonCounter.classList.remove('hidden');
            if (compareBtn) {
                compareBtn.disabled = comparisonList.length < 2;
            }
        } else {
            comparisonCounter.classList.add('hidden');
        }
    }
    
    console.log('Comparison counter updated:', comparisonList.length);
}

// Reset Comparison
function resetComparison() {
    console.log('Resetting comparison');
    comparisonList = [];
    updateComparisonCounter();
    renderFruits();
}

// Show Comparison Modal
function showComparisonModal() {
    console.log('Showing comparison modal');
    
    const ui = getCurrentInterface();
    
    if (comparisonList.length < 2) {
        alert(ui.minComparison);
        return;
    }
    
    const fruits = getCurrentFruits();
    const comparisonFruits = comparisonList.map(id => fruits.find(f => f.id === id)).filter(f => f);
    
    if (comparisonFruits.length === 0) {
        console.error('No comparison fruits found');
        return;
    }
    
    console.log('Comparison fruits:', comparisonFruits.length);
    
    // Generate comparison table
    const tableHTML = generateComparisonTable(comparisonFruits);
    const comparisonTable = document.getElementById('comparisonTable');
    if (comparisonTable) {
        comparisonTable.innerHTML = tableHTML;
    }
    
    // Calculate and show winner
    const winner = calculateWinner(comparisonFruits);
    const comparisonResult = document.getElementById('comparisonResult');
    if (comparisonResult) {
        comparisonResult.innerHTML = generateWinnerAnnouncement(winner, comparisonFruits);
    }
    
    // Show modal
    if (comparisonModal) {
        comparisonModal.classList.remove('hidden');
        comparisonModal.classList.add('show');
        console.log('Comparison modal shown');
    } else {
        console.error('Comparison modal element not found');
    }
}

// Generate Comparison Table
function generateComparisonTable(fruits) {
    const ui = getCurrentInterface();
    const stats = [
        { key: 'attack', name: ui.attack },
        { key: 'defense', name: ui.defense },
        { key: 'tactical', name: ui.tactical },
        { key: 'rarity', name: ui.rarity },
        { key: 'combatImpact', name: ui.combatImpact }
    ];
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>${ui.criterion}</th>
                    ${fruits.map(fruit => `<th>${fruit.name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
    `;
    
    stats.forEach(stat => {
        const values = fruits.map(fruit => fruit.stats[stat.key]);
        const maxValue = Math.max(...values);
        
        tableHTML += `
            <tr>
                <td><strong>${stat.name}</strong></td>
                ${fruits.map((fruit, index) => {
                    const value = fruit.stats[stat.key];
                    const isWinner = value === maxValue;
                    return `<td class="${isWinner ? 'winner' : ''}">${value}/10</td>`;
                }).join('')}
            </tr>
        `;
    });
    
    // Total row
    const totals = fruits.map(fruit => 
        Object.values(fruit.stats).reduce((sum, val) => sum + val, 0)
    );
    const maxTotal = Math.max(...totals);
    
    tableHTML += `
        <tr style="background: var(--color-secondary); font-weight: bold;">
            <td><strong>${ui.total}</strong></td>
            ${fruits.map((fruit, index) => {
                const total = totals[index];
                const isWinner = total === maxTotal;
                return `<td class="${isWinner ? 'winner' : ''}">${total}/50</td>`;
            }).join('')}
        </tr>
    `;
    
    tableHTML += `</tbody></table>`;
    return tableHTML;
}

// Calculate Winner
function calculateWinner(fruits) {
    const scores = fruits.map(fruit => {
        const stats = fruit.stats;
        const score = (stats.attack * 1.2) + (stats.defense * 1.0) + (stats.tactical * 1.1) + 
                     (stats.rarity * 0.8) + (stats.combatImpact * 1.3);
        return { fruit, score, total: Object.values(stats).reduce((sum, val) => sum + val, 0) };
    });
    
    scores.sort((a, b) => b.score - a.score);
    return scores;
}

// Generate Winner Announcement
function generateWinnerAnnouncement(scores, fruits) {
    const ui = getCurrentInterface();
    const winner = scores[0];
    const runnerUp = scores[1];
    
    let reasons = [];
    const winnerStats = winner.fruit.stats;
    
    if (winnerStats.attack >= 9) reasons.push(currentLanguage === 'ar' ? 'قوة هجومية مدمرة' : 'devastating attack power');
    if (winnerStats.defense >= 9) reasons.push(currentLanguage === 'ar' ? 'دفاع منيع' : 'impenetrable defense');
    if (winnerStats.tactical >= 9) reasons.push(currentLanguage === 'ar' ? 'تكتيكات متقدمة' : 'advanced tactics');
    if (winnerStats.rarity >= 9) reasons.push(currentLanguage === 'ar' ? 'ندرة استثنائية' : 'exceptional rarity');
    if (winnerStats.combatImpact >= 9) reasons.push(currentLanguage === 'ar' ? 'تأثير قتالي هائل' : 'massive combat impact');
    
    const scoreGap = winner.score - runnerUp.score;
    let dominance = '';
    if (currentLanguage === 'ar') {
        dominance = scoreGap > 5 ? 'بتفوق ساحق' : scoreGap > 2 ? 'بفارق واضح' : 'بفارق ضئيل';
    } else {
        dominance = scoreGap > 5 ? 'by overwhelming superiority' : scoreGap > 2 ? 'by clear margin' : 'by narrow margin';
    }
    
    const reasonText = currentLanguage === 'ar' 
        ? `تفوقت هذه الفاكهة ${reasons.length > 0 ? `بسبب ${reasons.join('، ')}` : 'بالمجموع العام للقدرات'}`
        : `This fruit excelled ${reasons.length > 0 ? `due to ${reasons.join(', ')}` : 'in overall capabilities'}`;
    
    const pointsText = currentLanguage === 'ar'
        ? `النقاط: ${winner.score.toFixed(1)} مقابل ${runnerUp.score.toFixed(1)} للمركز الثاني`
        : `Score: ${winner.score.toFixed(1)} vs ${runnerUp.score.toFixed(1)} for second place`;
    
    const rankingTitle = currentLanguage === 'ar' ? 'ترتيب الفواكه:' : 'Fruit Rankings:';
    const reasonTitle = currentLanguage === 'ar' ? 'السبب:' : 'Reason:';
    
    return `
        <div class="winner-announcement">
            🏆 ${ui.winner}: ${winner.fruit.name} ${dominance}!
        </div>
        <div class="winner-reason">
            <p><strong>${reasonTitle}</strong> ${reasonText}</p>
            <p><strong>${pointsText}</strong></p>
            <div style="margin-top: 1rem; padding: 1rem; background: var(--color-secondary); border-radius: 8px;">
                <strong>${rankingTitle}</strong><br>
                ${scores.map((item, index) => `
                    ${index + 1}. ${item.fruit.name} - ${item.score.toFixed(1)} ${currentLanguage === 'ar' ? 'نقطة' : 'points'}
                `).join('<br>')}
            </div>
        </div>
    `;
}

// Close Modals
function closeModals(e) {
    console.log('Closing modals');
    
    if (fruitModal) {
        fruitModal.classList.remove('show');
        setTimeout(() => {
            fruitModal.classList.add('hidden');
        }, 300);
    }
    
    if (comparisonModal) {
        comparisonModal.classList.remove('show');
        setTimeout(() => {
            comparisonModal.classList.add('hidden');
        }, 300);
    }
}

// Make functions globally available
window.showFruitDetails = showFruitDetails;