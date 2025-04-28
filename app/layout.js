"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, PopoverGroup } from "@headlessui/react";

export default function Layout() {
  const settings = { dots: false, infinite: true, speed: 500, slidesToShow: 1, autoplay: true, autoplaySpeed: 3000, arrows: false };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800, once: false, offset: 100
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const mobile = [
    { name: "سامسونگ" },
    { name: "هواوی" },
    { name: "اپل" },
    { name: "شیائومی" },
    { name: "انر" },
    { name: "نوکیا" },
  ]

  const mobile_accessorie = [
    { name: "قاب، کیف و کاور گوشی" },
    { name: "پایه نگهدارنده گوشی" },
    { name: "محافظ صفحه نمایش گوشی" },
    { name: "کابل و مبدل" },
    { name: "شارژر موبایل و تبلت" },
  ]

  const laptop = [
    { name: "ایسوس" },
    { name: "لنوو" },
    { name: "ایسر" },
    { name: "اپل" },
    { name: "اچ پی" },
    { name: "مایکروسافت" },
    { name: "دل" },
  ]

  const laptop_accessorie = [
    { name: "کیف ، کوله و کاور لپ تاپ" },
    { name: "باتری لپ‌ تاپ" },
    { name: "شارژر مخصوص لپ‌ تاپ" },
    { name: "کابل‌ صدا ، AUX و HDMI" },
  ]

  const data = [
    { name: "هارد دیسک اکسترنال" },
    { name: "فلش مموری" },
    { name: "کارت حافظه" },
  ]

  const speaker = [
    { name: "اسپیکر بلوتوثی" },
  ]

  const modem = [
    { name: "مودم - روتر ADSL" },
    { name: "مودم 3G و 4G" },
  ]

  const computer = [
    { name: "نمایشگر (مانیتور)" },
    { name: "ماوس" },
    { name: "کیبورد" },
    { name: "قطعات داخلی کامپیوتر" },
  ]

  const console = [
    { name: "XBox, PS5, PS4" },
    { name: "بازی" },
    { name: "تجهیزات مخصوص بازی" },
  ]

  const camera = [
    { name: "دوربین عکاسی دیجیتال" },
    { name: "دوربین‌ ورزشی و فیلم برداری" },
  ]

  const camera_accessorie = [
    { name: "لنز" },
    { name: "کیف" },
    { name: "کارت حافظه" },
    { name: "کاغذ چاپ عکس" },
  ]

  const office_machine = [
    { name: "تلفن، بی سیم و سانترال" },
    { name: "پرینتر" },
    { name: "فکس" },
    { name: "ویدیو پروژکتور" },
  ]

  const tv = [
    { name: "ایکس ویژن" },
    { name: "سامسونگ" },
    { name: "ال جی" },
    { name: "اسنوا" },
    { name: "TCL" },
    { name: "سونی" },
    { name: "جی پلاس" },
    { name: "شهاب" },
    { name: "دوو" },
  ]

  const light = [
    { name: "لامپ و چراغ" },
    { name: "لوستر و چراغ تزیینی" },
    { name: "انتن" },
  ]

  const home = [
    { name: "یخچال و فریزر" },
    { name: "ماشین لباسشویی" },
    { name: "ماشین ظرفشویی" },
    { name: "جارو برقی" },
    { name: "اتو بخار و پرسی" },
    { name: "چرخ خیاطی" },
    { name: "جارو شارژی" },
    { name: "تلفن، بی سیم و سانترال" },
    { name: "فن هیتر و بخاری برقی" },
    { name: "ابگرمکن" },
    { name: "ترازوی اشپزخانه" },
    { name: "بخارشو" },
    { name: "تصفیه اب و ابسردکن" },
  ]

  const cook = [
    { name: "مایکروویو ، مایکروفر" },
    { name: "سرخ کن" },
    { name: "اون توستر" },
    { name: "اجاق گاز" },
    { name: "کباب پز و باربیکیو" },
    { name: "فر توکار" },
    { name: "توستر" },
  ]

  const drink = [
    { name: "اسپرسو ساز" },
    { name: "چای ساز" },
    { name: "ابمیوه گیری" },
    { name: "سماور برقی" },
    { name: "کتری برقی" },
    { name: "قهوه ساز" },
    { name: "اب مرکبات گیر" },
  ]

  const food = [
    { name: "غذاساز" },
    { name: "چرخ گوشت" },
    { name: "همزن" },
    { name: "مخلوط کن" },
    { name: "آسیاب" },
    { name: "گوشت کوب برقی" },
    { name: "ساندویچ ساز" },
    { name: "خردکن" },
    { name: "ماشین آشپزخانه" },
  ]

  const rug = [
    { name: "فرش ماشینی" },
    { name: "فرش دستباف" },
    { name: "گلیم ماشینی" },
    { name: "تابلو فرش" },
    { name: "گبه ماشینی" },
    { name: "گبه دستباف" },
  ]

  const serving = [
    { name: "سرویس غذا خوری" },
    { name: "قاشق، چنگال و کارد" },
    { name: "ظروف پذیرایی" },
  ]

  const kitchen = [
    { name: "فلاسک و کلمن" },
    { name: "زود پز" },
    { name: "سرویس پخت و پز" },
    { name: "کتری و قوری" },
  ]

  const bath = [
    { name: "سرویس خواب" },
    { name: "پتو" },
    { name: "بالش" },
    { name: "کوسن" },
    { name: "رو بالشی" },
    { name: "ملحفه" },
    { name: "تشک" },
    { name: "دستشویی" },
    { name: "اتاق خواب" },
  ]

  const wash = [
    { name: "ابزار نظافت" },
    { name: "بند رخت" },
  ]

  const decor = [
    { name: "دکوراسیون اداری" },
    { name: "قاب عکس" },
    { name: "مبلمان خانگی" },
    { name: "ملزومات پرده " },
    { name: "ساعت های تزئینی" },
    { name: "چراغ خواب و اباژور" },
    { name: "تابلو" },
    { name: "میز جلو مبلی" },
    { name: "میز و صندلی ناهار خوری" },
    { name: "میز تلویزیون" },
    { name: "جا کفشی" },
  ]

  const tool = [
    { name: "کارواش" },
    { name: "دریل" },
    { name: "پیچ گوشتی برقی" },
    { name: "فرز و سنگ رومیزی" },
    { name: "اینورتر جوشکاری" },
    { name: "دستگاه جوش" },
    { name: "کمپرسور" },
    { name: "مکنده و دمنده" },
    { name: "ابزار همه کاره " },
    { name: "موتور برق" },
  ]

  const tool_2 = [
    { name: "متر ، تراز ، اندازه" },
    { name: "تجهیزات ایمنی و کار" },
    { name: "نردبان" },
  ]

  const hand_tool = [
    { name: "مجموعه ابزار" },
    { name: "پیچ گوشتی و فازمتر" },
    { name: "جعبه و کیف ابزار" },
  ]

  const garden = [
    { name: "سمپاش" },
    { name: "اره زنجیری" },
    { name: "اره" },
    { name: "لوازم ابیاری" },
    { name: "قیچی‌ ، چاقو و ابزار باغبانی" },
    { name: "تبر، بیل و کلنگ" },
  ]

  const build = [
    { name: "شیرالات و دوش حمام" },
    { name: "پمپ اب" },
  ]

  const light_2 = [
    { name: "محافظ برق" },
    { name: "لامپ و چراغ" },
    { name: "لوستر و اباژور" },
    { name: "چند راهی برق و محافظ ولتاژ" },
  ]

  const car = [
    { name: "روغن موتور" },
    { name: "روغن گیربکس" },
    { name: "انژکتور شوی و مکمل سوخت" },
    { name: "ضدیخ و اب رادیاتور" },
    { name: "روغن ترمز" },
    { name: "لاستیک و تایر" },
  ]

  const car_2 = [
    { name: "قفل پدال و قفل فرمان" },
    { name: "روکش فرمان" },
    { name: "لوازم تزیینی خودرو" },
    { name: "سیستم صوتی و تصویری" },
    { name: "نظافت و نگهداری خودرو" },
  ]

  const bike = [
    { name: "کلاه کاسکت موتور" },
  ]

  const car_3 = [
    { name: "چراغ خودرو" },
    { name: "لنت ترمز خودرو" },
    { name: "لاستیک و تایر" },
  ]

  const write = [
    { name: "میکروسکوپ" },
    { name: "کیف و کوله " },
    { name: "چراغ مطالعه" },
    { name: "ماشین حساب" },
    { name: "میز تحریر" },
  ]

  const studio = [
    { name: "ضبط کننده حرفه ای صدا" },
    { name: "تجهیزات نور زنده" },
    { name: "اسپیکر مانیتور و اجرای زنده" },
    { name: "هدفون حرفه‌ ای" },
    { name: "میکروفون استودیویی" },
    { name: "میدی کیبورد و کنترلر" },
    { name: "متعلقات استودیو" },
  ]

  const music = [
    { name: "گیتار" },
    { name: "ساز های کوبه ای" },
    { name: "ساز های بادی" },
    { name: "کیبورد و ارگ" },
    { name: "پیانو" },
    { name: "ویولن" },
    { name: "ساز های ایرانی" },
    { name: "لوازم جانبی الات موسیقی" },
  ]

  const Hand_craft = [
    { name: "تندیس و مجسمه دست ساز" },
    { name: "محصولات مسی" },
    { name: "تابلو صنایع دستی" },
    { name: "فیروزه کوبی" },
  ]

  const perfume = [
    { name: "عطر مردانه" },
    { name: "عطر زنانه" },
    { name: "عطر کودک" },
    { name: "عطر جیبی مردانه" },
    { name: "عطر جیبی زنانه" },
  ]

  const health = [
    { name: "دستگاه بخور و رطوبت ساز" },
    { name: "تصفیه‌ کننده هوا" },
    { name: "تصفیه‌ کننده اب" },
    { name: "فیلتر تصفیه کننده اب" },
  ]

  const personal = [
    { name: "ماشین اصلاح موی سرو صورت" },
    { name: "ماشین اصلاح سر" },
    { name: "اتو و حالت دهنده مو" },
    { name: "لیزر بدن" },
    { name: "سشوار" },
    { name: "اصلاح بدن آقایان" },
    { name: "اصلاح بدن بانوان" },
    { name: "اصلاح موی گوش ، بینی و ابرو" },
    { name: "مانیکور و پدیکور" },
    { name: "بهداشت دهان و دندان" },
    { name: "ابزار مراقبت از پوست" },
    { name: "فر کننده مو" },
  ]

  const health_tool = [
    { name: "ترازوی" },
    { name: "فشارسنج" },
    { name: "ماساژور" },
    { name: "تب سنج و دما سنج" },
    { name: "نمایشگر ضربان قلب" },
    { name: "تشک و پتوی برقی" },
    { name: "ویلچر" },
    { name: "مچ بند و ساعت هوشمند" },
    { name: "ساپورت های طبی" },
  ]

  const toy = [
    { name: "بازی فکری" },
    { name: "بازی اموزشی" },
    { name: "تفنگ" },
    { name: "سه‌ چرخه موتور و ماشین بازی" },
    { name: "تاب و سرسره" },
    { name: "پازل و لگو" },
    { name: "عروسک " },
    { name: "ماشین ، هواپیما و قطار" },
    { name: "ربات و گجت" },
    { name: "تشک بازی و پارک بازی" },
  ]

  const baby = [
    { name: "لباس" },
    { name: "کفش" },
    { name: "جوراب" },
  ]

  const kid = [
    { name: "مینی واش" },
    { name: "پوشک کودک و نوزاد" },
  ]

  const travel = [
    { name: "کالسکه و کریر" },
    { name: "صندلی خودرو کودک و نوزاد" },
    { name: "ساک لوازم کودک و نوزاد" },
    { name: "اغوشی" },
  ]

  const safe = [
    { name: "مانیتور و پیجر اتاق کودک و نوزاد" },
  ]

  const sleep = [
    { name: "سرویس خواب کودک و نوزاد" },
    { name: "تشک کودک و نوزاد" },
    { name: "پتو کودک و نوزاد" },
    { name: "ملحفه کودک و نوزاد" },
    { name: "مبلمان اتاق کودک" },
    { name: "گهواره" },
    { name: "پشه بند" },
    { name: "تخت خواب کودک و نوزاد" },
  ]

  const gym = [
    { name: " ایروبیک و تناسب اندام" },
    { name: "دمبل" },
    { name: "تردمیل" },
    { name: "دوچرخه ثابت و الپتیکال" },
    { name: "بارفیکس" },
    { name: "طناب" },

  ]

  const run = [
    { name: "اسکوتر برقی" },
    { name: "اسکوتر" },
    { name: "اسکیت " },
  ]

  const ball = [
    { name: "توپ" },
    { name: "راکت" },
    { name: "فوتبال دستی" },
    { name: "لوازم جانبی ورزش های توپی" },
  ]

  const other = [
    { name: "ورزش های ابی" },
    { name: "ورزش های رزمی" },
    { name: "ورزش های فکری" },
    { name: "ورزش های نشانه‌ گیری" },
  ]

  const camp = [
    { name: "چادر" },
    { name: "چاقوی سفر و ابزار چند کاره" },
    { name: "کیسه خواب" },
    { name: "اجاق و ظرف سفری" },
    { name: "دوربین دو چشمی و تک چشمی" },
    { name: "عصای کوهنوردی" },
    { name: "چراغ قوه و چراغ پیشانی" },
    { name: "قمقمه و فلاسک" },
    { name: "چادر سفری" },
    { name: "زیرانداز سفری" },
    { name: "تجهیزات جانبی کوه‌نوردی و سفر" },
  ]

  const bag = [
    { name: "کیف و کوله" },
    { name: "ساک و چمدان" },
    { name: "چتر" },
  ]

  const bicycle = [
    { name: "دوچرخه" },
    { name: "لوازم جانبی دوچرخه" },
  ]

  const gold = [
    { name: "گردنبند طلا " },
    { name: "اویز طلا" },
    { name: "پابند طلا" },
    { name: "دستبند طلا " },
    { name: "گل سینه طلا " },
    { name: "زنجیر طلا" },
    { name: "گوشواره طلا " },
    { name: "ست زیورالات طلا " },
    { name: "پیرسینگ طلا " },
    { name: "انگشتر طلا " },
    { name: "اویز ساعت طلا" },
    { name: "شمش و پلاک طلا و نقره" },
  ]

  const men_accessorie = [
    { name: "ست کیف و کفش مردانه" },
    { name: "کیف مردانه" },
    { name: "کوله پشتی مردانه" },
    { name: "کیف سفری و چمدان مردانه" },
    { name: "عینک مردانه" },
  ]

  const women_accessorie = [
    { name: "ست کیف و کفش زنانه" },
    { name: "کیف زنانه" },
    { name: "کوله پشتی زنانه" },
    { name: "کیف سفری و چمدان زنانه" },
    { name: "عینک زنانه" },
  ]

  const both_accessorie = [
    { name: "عینک زنانه و مردانه" },
    { name: "کوله پشتی زنانه و مردانه" },
    { name: "کیف زنانه و مردانه" },
  ]

  const men_watch = [
    { name: "ساعت عقربه ای مردانه" },
    { name: "ساعت دیجیتال مردانه" },
  ]

  const women_watch = [
    { name: "ساعت عقربه ای زنانه" },
    { name: "ساعت دیجیتال زنانه" },
  ]

  const both_watch = [
    { name: "ست ساعت زنانه و مردانه" },
    { name: "ساعت عقربه ای زنانه و مردانه" },
    { name: "ساعت دیجیتال زنانه و مردانه" },
  ]

  const both_shoes = [
    { name: "کفش ورزشی زنانه و مردانه" },
  ]

  const men_shoes = [
    { name: "کفش روزمره" },
    { name: "کفش ورزشی" },

  ]

  const women_shoes = [
    { name: "کفش روزمره" },
    { name: "کفش ورزشی" },
    { name: "کفش پاشنه دار" },
    { name: "کفش تخت" },
    { name: "کفش رسمی" },
  ]

  const kid_shoes = [
    { name: "پسرانه" },
    { name: "دخترانه" },
    { name: "پسرانه و دخترانه" },
  ]

  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <title>فروشگاه اینترنتی تیمچه</title>
        <link rel="icon" href="https://timcheh.com/safari-pinned-tab.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
      </head>

      <body className="bg-white overflow-x-hidden" id="top" style={{ fontFamily: "vazir", direction: "rtl" }}>

        {/* Top Img */}

        <Image src="/top.gif" width={1920} height={64} alt="top img" data-aos="zoom-in-down" className="w-full h-auto max-[1000px]:hidden" />

        {/* Header */}

        <section className="h-20">
          <div className="container max-w-[1404px]! flex items-center justify-between px-[15px]! h-full mx-auto!">

            <div className="bg-white" data-aos="fade-left">
              <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex">
                  <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                    <Image src="/menu.svg" width={25} height={25} alt="menu" className="cursor-pointer" />
                  </button>
                </div>

                <PopoverGroup className="hidden"></PopoverGroup>
              </nav>

              <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5"></a>

                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                      <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
                    </button>
                  </div>

                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            کالای دیجیتال
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            موبایل
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...mobile].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم جانبی موبایل
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...mobile_accessorie].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            پاور بانک (شارژر همراه)
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            مچبند و ساعت هوشمند
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لپ تاپ
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...laptop].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم جانبی لپ تاپ
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...laptop_accessorie].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            تبلت
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم جانبی تبلت
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            باتری ، شارژر و متعلقات
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            تجهیزات ذخیره‌سازی اطلاعات
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...data].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            هدفون، هدست، هندزفری
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            اسپیکر
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...speaker].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            مودم
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...modem].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کامپیوتر و تجهیزات جانبی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...computer].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کنسول بازی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...console].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            دوربین
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...camera].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم جانبی دوربین
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...camera_accessorie].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ماشین های اداری
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...office_machine].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            خانه و اشپزخانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            تلویزیون
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...tv].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            سینمای خانگی و ساندبار
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            گیرنده دیجیتال تلویزیون
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            نور و روشنایی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...light].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            حیوانات خانگی، غذا و لوازم
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            فندک و لوازم جانبی
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم خانگی برقی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...home].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم پخت و پز برقی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...cook].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            نوشیدنی ساز
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...drink].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            غذاساز و خرد کن
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...food].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            فرش
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...rug].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            سرو و پذیرایی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...serving].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            اشپزخانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...kitchen].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            خواب و حمام
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...bath].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            شستشو و نظافت
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...wash].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            دکوراتیو
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...decor].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            خودرو ، ابزار ، باغبانی
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ابزار برقی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...tool].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ابزار غیر برقی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...tool_2].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ابزار دستی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...hand_tool].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم باغبانی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...garden].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم و یراق الات ساختمان
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...build].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            روشنایی و لوازم الکتریکی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...light_2].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم مصرفی خودرو
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...car].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم جانبی خودرو
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...car_2].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            موتور سیکلت
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...bike].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم یدکی خودرو
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...car_3].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            فرهنگ و هنر
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم تحریر
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...write].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            تجهیزات استودیویی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...studio].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            الات موسیقی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...music].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            صنایع دستی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...Hand_craft].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            بهداشت شخصی و سلامت محیط
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            عطر و ادکلن
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...perfume].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            سلامت محیط
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...health].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            لوازم شخصی برقی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...personal].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ابزار سلامت
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...health_tool].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            اسباب بازی ، کودک و نوزاد
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            اسباب بازی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...toy].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            پوشاک و کفش کودک و نوزاد
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...baby].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            بهداشت کودک
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...kid].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            گردش و سفر
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...travel].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ایمنی و مراقبت
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...safe].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            خواب کودک
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...sleep].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            ورزش ، سفر، کمپینگ
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            پوشاک ورزشی مردانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            پوشاک ورزشی زنانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            پوشاک ورزشی پسرانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            پوشاک ورزشی دخترانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش ورزشی مردانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش ورزشی زنانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش ورزشی پسرانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش ورزشی دخترانه
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ورزش های هوازی و بدنسازی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...gym].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ورزش های سرعتی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...run].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ورزش های توپی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...ball].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            سایر وسایل ورزشی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...other].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کوه‌ نوردی و کمپینگ
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...camp].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            تجهیزات سفر
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...bag].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            دوچرخه و لوازم جانبی
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...bicycle].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#0082fd]!">
                            طلا ، مد و پوشاک
                          </DisclosureButton>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            زیورالات طلا زنانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...gold].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            اکسسوری مردانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...men_accessorie].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            اکسسوری زنانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...women_accessorie].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            اکسسوری زنانه و مردانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...both_accessorie].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ساعت مردانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...men_watch].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ساعت زنانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...women_watch].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            ساعت زنانه و مردانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...both_watch].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش زنانه و مردانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...both_shoes].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش مردانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...men_shoes].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            کفش زنانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...women_shoes].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>

                        <Disclosure as="div" className="-mx-3">
                          <DisclosureButton className="cursor-pointer group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#141414]!">
                            بچگانه
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                          </DisclosureButton>

                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...kid_shoes].map((item, index) => (
                              <DisclosureButton href={item.href} key={`${item.name}-${index}`} as="a" className="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-[#8c8c8c]! hover:text-[#0082fd]! transition duration-400 ease-in-out">
                                {item.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </Dialog>
            </div>

            <Image src="/logo.svg" width={115} height={36} alt="logo" data-aos="zoom-in" className="max-[580px]:hidden" />

            <div className="flex items-center gap-3" data-aos="fade-right">
              <button type="button" className="cursor-pointer w-[110px]! h-[30px]! text-[0.8em]! font-medium border border-[#0082fd] text-[#0082fd]! hover:text-[#fff]! hover:bg-[#0082fd]! duration-400 ease-in-out rounded-[10px] max-[430px]:hidden">در تیمچه بفروش</button>

              <div className="h-[30px]!">
                <button type="button" onClick={toggleModal}>
                  <Image src="/search.svg" width={30} height={30} alt="search" className="cursor-pointer" />
                </button>

                {isModalOpen && (
                  <div className="w-[320px]! h-[30px] fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-[#f5f5f5]! w-full max-w-md border border-[#141414] rounded-lg">
                      <div className="flex justify-between items-center p-4">
                        <input type="text" value={searchQuery} onChange={handleSearchChange} className="w-[250px]! h-[30px]! px-[15px]! py-[5px]!" placeholder="جستجو در تیمچه" />

                        <button type="button" className="w-[30px]! cursor-pointer text-gray-600" onClick={toggleModal} aria-label="Close">
                          <Image src="/close.svg" width={25} height={25} alt="close"></Image>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button type="button" className="cursor-pointer">
                <Image src="/shop.svg" width={30} height={30} alt="shop" />
              </button>

              <button type="button" className="cursor-pointer">
                <Image src="/help.svg" width={30} height={30} alt="help" />
              </button>

              <button type="button" className="cursor-pointer">
                <Image src="/gift.svg" width={30} height={30} alt="gift" />
              </button>

              <button type="button" className="cursor-pointer">
                <Image src="/user.svg" width={30} height={30} alt="user" />
              </button>
            </div>

          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mb-[30px]!" data-aos="zoom-out"></section>

        {/* Banner */}

        <section className="max-w-[1404px] px-[15px]! mx-auto!" data-aos="zoom-out">
          <Slider {...settings}>
            <div>
              <Image src="/banner-1.jpg" alt="banner1" width={1404} height={300} className="w-full h-[300px] object-cover rounded-lg" />
            </div>

            <div>
              <Image src="/banner-2.jpg" alt="banner2" width={1404} height={300} className="w-full h-[300px] object-cover rounded-lg" />
            </div>

            <div>
              <Image src="/banner-3.jpg" alt="banner3" width={1404} height={300} className="w-full h-[300px] object-cover rounded-lg" />
            </div>
          </Slider>
        </section>

        {/* 12X Img */}

        <section className="w-full overflow-x-scroll overflow-y-hidden mb-[30px]! px-[15px]!" data-aos="fade-down">
          <div className="container max-w-[1404px]! h-[175px] mx-auto! flex xl:flex-wrap flex-nowrap gap-6 py-2 xl:justify-between justify-start items-center whitespace-nowrap">
            {[
              { src: "/phone.jpg", label: "گوشی موبایل" },
              { src: "/laptop.jpg", label: "لپ‌ تاپ" },
              { src: "/wash.jpg", label: "ماشین ظرفشویی" },
              { src: "/smart.jpg", label: "ساعت هوشمند" },
              { src: "/cold.jpg", label: "یخچال" },
              { src: "/dark-blue.gif", label: "اقساطی" },
              { src: "/dark-green.gif", label: "بخر" },
              { src: "/tv.jpg", label: "تلویزیون" },
              { src: "/gold.jpg", label: "طلا" },
              { src: "/ssd.jpg", label: "هارد اکسترنال" },
              { src: "/loop.jpg", label: "ماشین لباسشویی" },
              { src: "/playstation.jpg", label: "کنسول بازی" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center w-[95px] shrink-0">
                <Image src={item.src} width={95} height={95} alt={item.label} className="cursor-pointer rounded-[5px]" />
                <span className="text-center text-sm text-[#595959] mt-[8px]!">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Blue Img */}

        <section className="container max-w-[1404px] mx-auto! flex flex-col xl:flex-row items-center justify-between">
          <Image src="/check.jpg" width={630} height={270} alt="check" className="w-full md:w-auto cursor-pointer rounded-[10px] 5" data-aos="fade-left" />

          <Image src="/team.jpg" width={630} height={270} alt="team" className="w-full md:w-auto cursor-pointer rounded-[10px] watch-img" data-aos="fade-right" />
        </section>

        {/* Mobile Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">موبایل</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Orange Img */}

        <section className="container max-w-[1404px] mx-auto! flex flex-col xl:flex-row items-center justify-between">
          <Image src="/shoe-weman.jpg" width={630} height={270} alt="shoe" className="w-full md:w-auto cursor-pointer rounded-[10px]! watch-img" data-aos="fade-left" />

          <Image src="/shoe-men.jpg" width={630} height={270} alt="men" className="w-full md:w-auto cursor-pointer rounded-[10px]! watch-img" data-aos="fade-right" />
        </section>

        {/* Laptop Text */}

        <section className="w-full max-w-[1404px] mt-[20px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">لپ تاپ</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Laptop Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mx-auto! px-[15px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="w-full h-[300px] p-4 cursor-pointer text-center px-[15px]!" data-aos="fade-left">
              <Image src="/rog.jpg" width={170} height={170} alt="rog" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">لپ تاپ 15 اینچی ایسوس مدل ROG Zephyrus GU502LW - A</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸۷,۵۰۰,۰۰۰ تومان</p>
            </div>

            <div className="w-full h-[300px] p-4 cursor-pointer text-center px-[15px]!" data-aos="zoom-in">
              <Image src="/tuf.jpg" width={170} height={170} alt="tuf" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506LH-B</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۳۷,۵۰۰,۰۰۰ تومان</p>
            </div>

            <div className="w-full h-[300px] p-4 cursor-pointer text-center px-[15px]!" data-aos="fade-right">
              <Image src="/rog-2.jpg" width={170} height={170} alt="rog2" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">لپ تاپ 17.3 اینچی ایسوس مدل ROG Strix G17 G713IC-AA</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۰۷,۵۰۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* 4X Img */}

        <section className="container max-w-[1404px] mx-auto! flex flex-wrap gap-6 justify-center xl:justify-between items-center px-4 mt-[30px]! ">
          <Image src="/mobile.png" width={306} height={198} alt="mobile" className="w-full sm:w-[45%] lg:w-[23%] cursor-pointer watch-img" data-aos="flip-right" />

          <Image src="/hard.png" width={306} height={198} alt="hard" className="w-full sm:w-[45%] lg:w-[23%] cursor-pointer watch-img" data-aos="flip-right" />

          <Image src="/camera.png" width={306} height={198} alt="camera" className="w-full sm:w-[45%] lg:w-[23%] cursor-pointer watch-img" data-aos="flip-right" />

          <Image src="/headset.png" width={306} height={198} alt="headset" className="w-full sm:w-[45%] lg:w-[23%] cursor-pointer watch-img" data-aos="flip-right" />
        </section>

        {/* Computer Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">کامپیوتر و تجهیزات جانبی</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Computer Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="fade-left">
              <Image src="/ssd-1.jpg" width={170} height={170} alt="ssd1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هارد اکسترنال وسترن دیجیتال مدل Elements با ظرفیت 1 ترابایت</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۲,۵۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/airpod.jpg" width={170} height={170} alt="airpod" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هدفون بی سیم مدل ایرپاد پرو</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۸۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/ssd-2.jpg" width={170} height={170} alt="ssd2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هارد اکسترنال وسترن دیجیتال مدل My Passport با ظرفیت 4 ترابایت</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۵,۲۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="fade-right">
              <Image src="/ssd-4.jpg" width={170} height={170} alt="ssd4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هارددیسک اینترنال وسترن دیجیتال مدل Blue WD10EZEX ظرفیت 1 ترابایت 64 </h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۲۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/ssd-3.jpg" width={170} height={170} alt="ssd3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هارد اکسترنال ضد ضربه ای دیتا مدل HD710 Pro با ظرفیت 1 ترابایت</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۲,۲۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/modem.jpg" width={170} height={170} alt="modem" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">مودم روتر تی پی لینک دو آنتن ADSL2 Plus بی سیم مدل W8961N</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۹۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* TV Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">تلویزیون</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* 5X Img */}

        <section className="w-full max-w-[1404px] mt-[30px] mx-auto! px-[15px]!">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 px-[25px]!" data-aos="fade-left">
              <Image src="/car.jpg" alt="car" width={380} height={620} className="rounded-[10px] cursor-pointer" />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-right">
              <div className="flex gap-4 flex-wrap">
                <Image src="/car-2.jpg" alt="car-2" width={315} height={300} className="rounded-[10px] w-[315px] h-[300px] cursor-pointer" />

                <Image src="/car-3.jpg" width={550} height={300} alt="car-3" className="rounded-[10px] w-[550px] h-[300px] cursor-pointer" />
              </div>

              <div className="flex gap-4 flex-wrap">
                <Image src="/car-4.jpg" width={550} height={300} alt="car-4" className="rounded-[10px] w-[550px] h-[300px] cursor-pointer" />

                <Image src="/car-5.jpg" width={315} height={300} alt="car-5" className="rounded-[10px] w-[315px] h-[300px] cursor-pointer" />
              </div>
            </div>
          </div>
        </section>

        {/* Play Station Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">کنسول بازی</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Play Station Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/gamepad-1.jpg" width={170} height={170} alt="gamepad1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دسته بازی dual sense سونی پلی استیشن 5 مدل Midnight Black</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۴,۰۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/sony.jpg" width={170} height={170} alt="sony" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هدست بی سیم پلاتینیوم مخصوص پلی استیشن 4</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۳,۹۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/gamepad-2.jpg" width={170} height={170} alt="gamepad2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دسته بازی dual sense سونی پلی استیشن 5 مدل Cosmic Red</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۳,۹۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/stand.jpg" width={170} height={170} alt="stand" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">استند دسته پلی استیشن 5 مدل last of us</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۲۸۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/gamepad-3.jpg" width={170} height={170} alt="gamepad3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دسته بازی پلی‌ استیشن 2 سونی مدل Silk-A</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۳۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/fake.jpg" width={170} height={170} alt="fake" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">هدست با سیم گیمینگ دابی مناسب برای پلی استیشن 5</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۴۱۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Glasses Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">عینک زنانه و مردانه</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Glasses Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/glasses-1.jpg" width={170} height={170} alt="glasses1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">عینک آفتابی خلبانی شیائومی مدل TYJ02TS</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۳۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/glasses-2.jpg" width={170} height={170} alt="glasses2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">عینک آفتابی ورساچه مدل 372</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/glasses-3.jpg" width={170} height={170} alt="glasses3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">عینک آفتابی ورساچه مدل 4307</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/glasses-6.jpg" width={170} height={170} alt="glasses6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">عینک آفتابی ورساچه مدل 4238</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/glasses-4.jpg" width={170} height={170} alt="glasses4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">عینک آفتابی ویفرر شیائومی مدل EXPLORER TYJ01TS</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۲۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/glasses-5.jpg" width={170} height={170} alt="glasses5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">عینک آفتابی ورساچه مدل 4306</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸,۰۰۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Rug Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">فرش دستبافت</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Rug Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/rug-1.jpg" width={170} height={170} alt="rug1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فرش دستبافت 5 متری طرح تاج گذاری کد 140653</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۷۷,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/rug-2.jpg" width={170} height={170} alt="rug2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فرش دستباف سه متری طرح باغ بهشت خراسان کد 140501</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۲۱,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/rug-3.jpg" width={170} height={170} alt="rug3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فرش دستباف دو متری مدل پولونز کد 4103301</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۶,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/rug-4.jpg" width={170} height={170} alt="rug4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فرش دستبافت سه متری طرح هریس خراسان کد 4103209</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۴,۹۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/rug-5.jpg" width={170} height={170} alt="rug5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فرش دستبافت دو و نیم متری مدل خراسان کد 141132</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۵,۲۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/rug-6.jpg" width={170} height={170} alt="rug6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فرش دستباف سه متری مدل کف ساده کد 4103305</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۴,۱۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Cook Img */}

        <section className="container max-w-[100%] flex justify-center items-center mx-auto px-[15px]! max-[700px]:hidden">
          <Image src="/cook.jpg" width={1404} height={205} alt="cook" className="rounded-[10px] cursor-pointer" data-aos="zoom-in" />
        </section>

        {/* Hand Tool Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">ابزار دستی</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Hand Tool Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/hand-tool-1.jpg" width={170} height={170} alt="handtool1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">مجموعه چکش 12 کاره توتال مدل 0126</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۶۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/hand-tool-2.jpg" width={170} height={170} alt="handtool2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">قیچی باغبانی اینکو مدل HPS0308</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۲۸۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/hand-tool-3.jpg" width={170} height={170} alt="handtool3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">آچار فرانسه نووا مدل NTA 3002 سایز 8 اینچ</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۵۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/hand-tool-4.jpg" width={170} height={170} alt="handtool4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">آچار اینکو مدل HRCW40231</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۶۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/hand-tool-5.jpg" width={170} height={170} alt="handtool5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">آچار جاکس ساعت هواکسینگ مدل H2819</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۶۸۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/hand-tool-6.jpg" width={170} height={170} alt="handtool6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">آچار جاکس ساعت هدا مدل RX500</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۵۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Perfume Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">عطر و ادکلن زنانه</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Perfume Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/perfume-1.jpg" width={170} height={170} alt="perfume1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تستر ادو پرفیوم زنانه نارسیسو رودریگز مدل For her حجم 100 میلی لیتر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۲۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/perfume-2.jpg" width={170} height={170} alt="perfume2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ادو پرفیوم زنانه تام فورد مدل Black Orchid حجم 100 میلی لیتر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۵۶۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/perfume-3.jpg" width={170} height={170} alt="perfume3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ادو پرفیوم زنانه لالیک مدل Le Amour حجم 100 میلی‌ لیتری</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۱۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/perfume-4.jpg" width={170} height={170} alt="perfume4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تستر ادو پرفیوم زنانه ورساچه مدل Crystal Noir حجم 90 میلی لیتر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۷۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/perfume-5.jpg" width={170} height={170} alt="perfume5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ادو تویلت زنانه ورساچه مدل Bright Crystal حجم 90 میلی لیتری</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۶۷۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/perfume-6.jpg" width={170} height={170} alt="perfume6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تستر ادو پرفیوم زنانه دیور مدل J'adore حجم 100 میلی لیتر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱,۸۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Bed Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">تشک</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Bed Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!">
          <div className="flex h-[320px]! overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-1.jpg" width={170} height={170} alt="bed1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک دونفره پرومدی مدل T42MAT2020 سایز 160×200 سانتی متر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۶,۷۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-2.jpg" width={170} height={170} alt="bed2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک دونفره پرومدی مدل GANODERMA سایز 140×200 سانتی متر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۱,۷۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-3.jpg" width={170} height={170} alt="bed3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک دونفره پرومدی مدل BAMBOO DOUBLE سایز 180x200 سانتی متر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۰,۸۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-4.jpg" width={170} height={170} alt="bed4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک دو نفره رویال مدل سوپرفنری آسوده سایز 160x200</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۳,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-1.jpg" width={170} height={170} alt="bed1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک دونفره پرومدی مدل T42MAT2020 سایز 140×200 سانتی متر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۷,۲۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-2.jpg" width={170} height={170} alt="bed2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک دونفره پرومدی مدل GANODERMA سایز 160×200 سانتی متر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۳,۰۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/bed-3.jpg" width={170} height={170} alt="bed3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">تشک یکنفره پرومدی مدل BAMBOO DOUBLE سایز 120x200 سانتی متر</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸,۱۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Watch Img */}

        <section className="container max-w-[1404px] mx-auto! flex flex-col xl:flex-row items-center justify-between max-md:px-[15px]">
          <Image src="/weman.png" width={630} height={270} alt="weman" className="w-full md:w-auto cursor-pointer max-[1279px]:my-[10px]" data-aos="fade-left" />

          <Image src="/men.png" width={630} height={270} alt="men" className="w-full md:w-auto cursor-pointer max-[1279px]:my-[10px]" data-aos="fade-right" />
        </section>

        {/* Electric Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">لوازم پخت و پز برقی</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Electric Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mx-auto! px-[15px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="w-full h-[300px] p-4 cursor-pointer text-center" data-aos="fade-left">
              <Image src="/Waffle-1.jpg" width={170} height={170} alt="waffle" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">وافل ساز سانیز مدل مینی سانی</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۷۳۹,۰۰۰ تومان</p>
            </div>

            <div className="w-full h-[300px] p-4 cursor-pointer text-center" data-aos="zoom-in">
              <Image src="/Waffle-2.jpg" width={170} height={170} alt="waffle" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ساندویج ساز سانیز مدل شونینگ</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۸۴۹,۰۰۰ تومان</p>
            </div>

            <div className="w-full h-[300px] p-4 cursor-pointer text-center" data-aos="fade-right">
              <Image src="/Waffle-3.jpg" width={170} height={170} alt="waffle" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">برگر ساز سانیز مدل کمبروک</h3>

              <p className="text-[1.125em]! font-bold text-[#141414] mt-[10px]!">۱۸۰,۰۰۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Smart Watch Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">ساعت و مچ بند هوشمند</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Smart Watch Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mb-[30px] mx-auto! px-[15px]!">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/smartwatch-1.jpg" width={170} height={170} alt="smartwatch" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ساعت هوشمند پرووان مدل PWS06</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲,۳۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/smartwatch-2.jpg" width={170} height={170} alt="smartwatch" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">مچ بند هوشمند هوآوی مدل Band 6</h3>

              <p className="text[1.125em]l font-bold text-[#141414] mt-[10px]!">۱,۸۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/smartwatch-3.jpg" width={170} height={170} alt="smartwatch" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ساعت هوشمند اپل سری 8 مدل Aluminum</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۸,۷۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/smartwatch-4.jpg" width={170} height={170} alt="smartwatch" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ساعت هوشمند پرووان مدل PWS05</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲,۳۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/smartwatch-5.jpg" width={170} height={170} alt="smartwatch" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ساعت هوشمند هوآوی مدل Watch 3</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۴,۴۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/smartwatch-6.jpg" width={170} height={170} alt="smartwatch" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ساعت هوشمند پرووان مدل PWS04</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲,۱۸۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Accessories Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">لوازم جانبی گوشی موبایل</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Accessories Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mb-[30px] mx-auto! px-[15px]!">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/accessories-1.jpg" width={170} height={170} alt="Accessories1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">محافظ صفحه نمایش اکس اکسلنت مدل Airbag مناسب برای گوشی موبایل شیائومی 11T Pro</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/accessories-6.jpg" width={170} height={170} alt="Accessories6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">شارژر دیواری اپل مدل 20 وات</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۵۹۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/accessories-2.jpg" width={170} height={170} alt="Accessories2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">مبدل USB-C OTG سامسونگ مدل GH98-41288</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۸۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/accessories-5.jpg" width={170} height={170} alt="Accessories5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">کابل تبدیل USB به microUSB هوآوی مدل AP71</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۲۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/accessories-3.jpg" width={170} height={170} alt="Accessories3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">پایه نگهدارنده گوشی موبایل و تبلت یونیمات مدل D-930 PLUS</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/accessories-4.jpg" width={170} height={170} alt="Accessories4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">کابل تبدیل USB به microUSB هوآوی مدل HL1121 طول 1 متر</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Power Bank Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">پاوربانک (شارژر همراه)</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Power Bank Product */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="w-full h-[300px] p-4 cursor-pointer text-center px-[15px]!" data-aos="fade-left">
              <Image src="/powerbank-1.jpg" width={170} height={170} alt="powerbank" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">شارژر همراه 30000 میلی ‌آمپر تسکو مدل TP 889 همراه با 4 پورت خروجی</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱,۷۸۰,۰۰۰ تومان</p>
            </div>

            <div className="w-full h-[300px] p-4 cursor-pointer text-center px-[15px]!" data-aos="fade-right">
              <Image src="/powerbank-2.jpg" width={170} height={170} alt="powerbank" className="w-full h-48 object-contain mb-4!" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">شارژر همراه 20000 میلی‌ آمپر تسکو مدل TP 881 همراه با 4 پورت خروجی</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱,۴۰۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Home Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">لوازم خانگی برقی</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Home Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mb-[30px] mx-auto! px-[15px]!">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/home-1.jpg" width={170} height={170} alt="home1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">اسپرسو ساز کوچ مدل KE1970 با توان 1100 وات</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۸,۹۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/home-2.jpg" width={170} height={170} alt="home2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">خردکن 2 تیغه مولینکس مدل DPA1</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۳,۱۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/home-3.jpg" width={170} height={170} alt="home3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">اسپرسو ساز کوچ مدل 1980 با توان 1450 وات</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۹,۲۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/home-4.jpg" width={170} height={170} alt="home4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">پرزگیر لباس مک استایلر مدل MC-6202</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۶۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/home-5.jpg" width={170} height={170} alt="home5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">فیلتر کاغذی چای مهرسان مدل MB مجموعه 3 عددی</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۴۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/home-6.jpg" width={170} height={170} alt="home6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">کیسه جاروبرقی پارس خزر مدل Kompressor</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۰۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Bed Img */}

        <section className="container max-w-[100%] flex justify-center items-center mx-auto mt-[30px]! px-[15px]! max-[700px]:hidden">
          <Image src="/bed.jpg" width={1404} height={205} alt="bed" className="rounded-[10px] cursor-pointer" data-aos="zoom-in" />
        </section>

        {/* Service Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">سرویس خواب</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Service Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mb-[30px] mx-auto! px-[15px]!">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/service-1.jpg" width={170} height={170} alt="service1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">سرویس خواب کد A070 دونفره 6 تکه</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲,۲۴۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/service-2.jpg" width={170} height={170} alt="service2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">سرویس خواب کد A023 دونفره 6 تیکه میکرو</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲,۰۴۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/service-3.jpg" width={170} height={170} alt="service3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">سرویس کاور لحاف کریستال طرح Mahinur Fusya دو نفره 4 تکه</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۳,۵۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/service-4.jpg" width={170} height={170} alt="service4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">ست ملحفه کشدار برند اورتوم مدل Beauty Home دو نفره 3 تکه</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۶۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/service-5.jpg" width={170} height={170} alt="service5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">سرویس خواب کد A065 دونفره 6 تکه</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۴,۱۵۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/service-6.jpg" width={170} height={170} alt="service6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">سرویس خواب مدل میکرو چاپ دیجیتال کد A020 دو نفره 6 تکه</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۲,۹۵۰,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* Power Tool Text */}

        <section className="w-full max-w-[1404px] mt-[30px]! mb-[30px]! mx-auto! px-[15px]!" data-aos="zoom-in">
          <div className="flex flex-nowrap items-center justify-between h-[60px]">
            <h2 className="text-xl font-bold text-[#141414] whitespace-nowrap">ابزار برقی</h2>

            <a href="#" className="flex items-center gap-1 text-[#141414] text-sm sm:text-base whitespace-nowrap">
              <span>مشاهده بیشتر</span>
              <Image src="/arrow.svg" width={20} height={20} alt="arrow" className="w-[20px] h-[20px]" />
            </a>
          </div>
        </section>

        {/* Power Tool Product */}

        <section className="w-full max-w-[1404px] mt-[30px] mb-[30px] mx-auto! px-[15px]!">
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide gap-6">
            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/power-tool-1.jpg" width={170} height={170} alt="powertool1" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دستگاه اینورتر جوشکاری صبا الکتریک مدل RINV-250-v با امپر 250</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۱۰,۲۴۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/power-tool-2.jpg" width={170} height={170} alt="powertool2" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دستگاه اینورتر جوشکاری الکتروجوش مدل 200D با آمپر 200</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۸,۹۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/power-tool-3.jpg" width={170} height={170} alt="powertool3" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دستگاه جوش 950 آمپر دیوالت مدل IGBT</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۵,۵۰۰,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/power-tool-4.jpg" width={170} height={170} alt="powertool4" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دریل بتن کن سه کاره ماکیتا مدل 2470 کد F با توان 780 وات</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۴,۲۴۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/power-tool-5.jpg" width={170} height={170} alt="powertool5" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">دریل پیچ گوشتی چکشی شارژی براشلس 20 ولت اینکو مدل 20608</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۶,۷۴۵,۰۰۰ تومان</p>
            </div>

            <div className="min-w-[260px] max-w-[260px] h-[300px] cursor-pointer text-center flex-shrink-0" data-aos="zoom-in">
              <Image src="/power-tool-6.jpg" width={170} height={170} alt="powertool6" className="w-full h-48 object-contain mb-4" />

              <h3 className="text-sm sm:text-base md:text-lg text-[#595959] text-[0.8em]! mt-[20px]!">مینی فرز شارژی ماکیتا مدل M17 با توان 6000 وات</h3>

              <p className="text-[1.125em] font-bold text-[#141414] mt-[10px]!">۳,۷۹۵,۰۰۰ تومان</p>
            </div>
          </div>
        </section>

        {/* Border */}

        <section className="border-b border-[#d9d9d9] mt-[30px]! mb-[30px]!" data-aos="zoom-out"></section>

        {/* 4X Icon */}

        <section className="w-full h-[80px] py-[20px]! px-[20px]! mb-[30px]! max-[1023px]:h-[145px] max-[767px]:h-[270px] max-[639px]:h-[450px]">
          <div className="container mx-auto! max-w-[1400px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-sm">
              <div className="flex justify-center flex-col sm:flex-row items-center gap-2 cursor-pointer" data-aos="fade-left">
                <Image src="/advantage-1.svg" width={40} height={40} alt="advantage1" className="w-10 h-10 ml-[15px]!" />

                <div className="text-center">
                  <h4 className="font-bold text-[#434343]">۱۰ روز ضمانت بازگشت</h4>

                  <p className="text-[#84868e] text-xs">حتی جمعه‌ ها</p>
                </div>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-center gap-2 cursor-pointer" data-aos="zoom-in">
                <Image src="/advantage-2.svg" width={40} height={40} alt="advantage2" className="w-10 h-10 ml-[15px]!" />

                <div className="text-center">
                  <h4 className="font-bold text-[#434343]">امکان خرید اقساطی</h4>

                  <p className="text-[#84868e] text-xs">بدون چک و ضامن</p>
                </div>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-center gap-2 cursor-pointer" data-aos="zoom-in">
                <Image src="/advantage-3.svg" width={40} height={40} alt="advantage3" className="w-10 h-10 ml-[15px]!" />

                <div className="text-center">
                  <h4 className="font-bold text-[#434343]">تضمین اصالت کالا</h4>

                  <p className="text-[#84868e] text-xs">واقعی</p>
                </div>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-center gap-2 cursor-pointer" data-aos="fade-right">
                <Image src="/advantage-4.svg" width={40} height={40} alt="advantage4" className="w-10 h-10 ml-[15px]!" />

                <div className="text-center">
                  <h4 className="font-bold text-[#434343]">پشتیبانی تا ۱۲ شب</h4>

                  <p className="text-[#84868e] text-xs">حتی جمعه‌ ها</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}

        <section className="w-full bg-[#fafafa] py-4">
          <div className="container mx-auto! px-4 max-w-[1404px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex justify-around items-center h-16 md:h-[60px]" data-aos="fade-left">
                <a href="#" className="text-[0.875em]! tex-[#141414]!">ﺷﻤﺎره ﺗﻤﺎس</a>

                <a href="#" className="text-[0.875em]! tex-[#141414]!">۰۲۱-۹۱۰۱۲۹۵۹</a>
              </div>

              <div className="flex justify-around items-center h-16 md:h-[60px]" data-aos="zoom-in">
                <a href="#" className="text-[0.875em]! tex-[#141414]!">ادرس ایمیل</a>

                <a href="#" className="text-[0.875em]! tex-[#141414]!">Salam@timcheh.com</a>
              </div>

              <div className="flex justify-around items-center h-16 md:h-[60px]" data-aos="fade-right">
                <div className="flex justify-around w-[100%]!">
                  <a href="#">
                    <svg className="w-[25px]! h-[25px]! fill-[#8c8c8c] hover:fill-[#0082fd] duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>

                  <a href="#">
                    <svg className="w-[25px]! h-[25px]! fill-[#8c8c8c] hover:fill-[#0082fd] duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </a>

                  <a href="#">
                    <svg className="w-[25px]! h-[25px]! fill-[#8c8c8c] hover:fill-[#0082fd] duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </a>

                  <a href="#">
                    <svg className="w-[25px]! h-[25px]! fill-[#8c8c8c] hover:fill-[#0082fd] duration-400 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4X Column */}

        <section className="w-full bg-white py-[50px]! px-[15px]!">
          <div className="container mx-auto! px-4 max-w-[1404px]!">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-right">
              <div data-aos="fade-left">
                <h3 className="font-bold text-lg mb-4">دفترچه خریداران</h3>

                <ul className="space-y-2 text-sm mt-[20px]! text-gray-700">
                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">ثبت سفارش</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">روش های پرداخت</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">شرایط ارسال</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">پیگیری سفارش</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">ضمانت و بازگشت کالا</a>
                  </li>
                </ul>
              </div>

              <div data-aos="zoom-in">
                <h3 className="font-bold text-lg mb-4">دفترچه فروشندگان</h3>

                <ul className="space-y-2 text-sm mt-[20px]! text-gray-700">
                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">راهنمای فروشندگان</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">میخواهم فروشنده شوم</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">قوانین و مقررات فروش</a>
                  </li>
                </ul>
              </div>

              <div data-aos="zoom-in">
                <h3 className="font-bold text-lg mb-4">دانستنی‌ها</h3>

                <ul className="space-y-2 text-sm mt-[20px]! text-gray-700">
                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">حریم شخصی شما</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">قوانین و مقررات ما</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">فرصت‌های شغلی</a>
                  </li>
                </ul>
              </div>

              <div data-aos="fade-right">
                <h3 className="font-bold text-lg mb-4">تیمچه</h3>

                <ul className="space-y-2 text-sm mt-[20px]! text-gray-700">
                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">درباره تیمچه</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">ارتباط با تیمچه</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">مزیت‌های تیمچه</a>
                  </li>

                  <li className="h-[30px]!">
                    <a href="#" className="transition duration-400 ease-in-out hover:text-[#0082fd]!">داستان تیمچه</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Go Top Button */}

        <a href="#top" className="w-[40px]! fixed bottom-6 right-4 z-10">
          <Image src="/go-to-top.svg" width={40} height={40} alt="go to top" />
        </a>

        {/* About Timcheh */}

        <section className="flex justify-around bg-[#fafafa] py-[24px]! px-[15px]! h-[175px] max-[1279px]:h-[220px] max-[989px]:h-[245px] max-[812px]:h-[270px] max-[680px]:h-[300px] max-[588px]:h-[330px] max-[522px]:h-[370px] max-[466px]:h-[415px] max-[399px]:h-[450px] max-[377px]:h-[480px]">
          <div className="container max-w-[1326px] mx-auto">
            <div className="text-base text-[1.3em]! font-semibold mb-[10px]! text-[#141414]">تیمچه خرید آنلاین همه نوع کالا</div>

            <div className="text-sm text-[1em]! text-justify leading-[30px] text-[#8c8c8c]">تیمچه فروشگاهی اینترنتی با مدل بازارگاه یا «MarketPlace» است که با تنوع ده‌ ها هزار کالا در دسته‌ های متفاوت خرید انلاین همه‌چیز را برای همه در سراسر کشور امکان‌ پذیر کرده است. لندو اولین و بزرگ‌ترین استارتاپ ایرانی در حوزه خرید اقساطی فروشگاه اینترنتی تیمچه را راه‌اندازی کرده است. ضمانت اصل بودن کالا ضمانت ده‌ روزه بازگشت کالا پشتیبانی در هفت روز هفته و امکان خرید اقساطی کالا ها مزایایی است که تیمچه برای خلق یک تجربه متفاوت از خرید انلاین فراهم کرده است. در تیمچه سبد های‌ تان را با هر چیزی که در فکرش بودید پر می‌کنیم. از موبایل و تلویزیون و دوربین گرفته تا ساز و ابزار و پوشیدنی و خوردنی</div>
          </div>
        </section>

        {/* Copy Right */}

        <section className="flex flex-wrap justify-around items-center bg-[#f5f5f5] text-[#979797] min-h-[70px] py-2 px-4 text-[1em] text-center">
          <div className="w-full sm:w-auto px-2 mb-[5px]!">کلیه حقوق متعلق به سینا احمدی است</div>

          <div className="w-full sm:w-auto px-2">Copyrights Sina Co - ۱۴۰۴</div>
        </section>
      </body>
    </html >
  );
}
