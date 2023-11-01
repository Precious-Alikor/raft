<template>
    <div class="bg-black text-white">
        <div class="container mx-auto flex justify-between items-center py-4 px-5 relative">
            <div>
                <img src="../assets/img/logo.svg" alt="raft-logo" class="h-6">
            </div>
            <div class="hidden items-center md:flex">
                <h6 class="gray02 text-sm ml-16 cursor-pointer">Solutions</h6>
                <h6 class="gray02 text-sm ml-16 cursor-pointer">Learn</h6>
                <h6 class="gray02 text-sm ml-16 cursor-pointer">About</h6>
            </div>
            <div class="hidden items-center md:flex">
                <h6 class=" text-sm mr-5 cursor-pointer">Login</h6>
                <button class=" text-[0.9rem] px-4 py-2 green02 rounded-full cursor-pointer">Get Started</button>
            </div>
            <div class="flex flex-col items-center p-7 w-full absolute top-14 left-0 right-0 md:hidden z-10 bg-black"
                :class="showMenu ? 'visible' : 'invisible'">
                <h6 class="gray02 text-sm my-4 cursor-pointer text-center">Solutions</h6>
                <h6 class="gray02 text-sm my-4 cursor-pointer text-center">Learn</h6>
                <h6 class="gray02 text-sm my-4 cursor-pointer text-center">About</h6>
                <h6 class=" text-sm my-4 cursor-pointer text-center">Login</h6>
                <button class=" text-[0.9rem] px-4 py-2 green02 rounded-full my-3 cursor-pointer block mx-auto">Get
                    Started</button>
            </div>
            <div class="flex md:hidden">
                <i class="fa-solid fa-bars" @click="showMenu = !showMenu"
                    :class="showMenu ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
            </div>
        </div>

        <div class="py-20 lg:py-24 gray03 flex flex-col items-center hero">
            <div class="px-4 py-2 text-gray-100 text-sm font-light gray01 rounded-full mb-4 lg:mb-1  flex items-center">
                <p>Introducing Raft Cards</p>
                <img src="../assets/img/chevron-right.svg" alt="chevron-right" class="h-3 ml-4">
            </div>
            <h1 class=" text-center text-[2.4rem] lg:text-[6rem] leading-snug mb-4 heading">Building the future of
                <br>
                banking.
            </h1>
            <p class="gray02 text-center leading-5 mx-4 heading_paragraph">Experience the future of banking with RAFT. We're
                here
                to <br class="hidden lg:block"> empower
                your financial journey.</p>
            <div class="heading_paragraph">
                <button class=" text-[0.9rem] px-5 py-3 green02 rounded-full mt-7 block mx-auto">Get Started</button>
            </div>
        </div>

        <div class="container mx-auto lg:px-5">
            <img src="../assets/img/img_1.svg" alt="img_1">
        </div>

        <div class="container mx-auto py-14 lg:py-20 flex flex-col items-center lg:px-5">
            <p class="gray02 mb-3">FEATURED AND SEEN IN</p>
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-[2.5rem] items-center my-12 comp">
                <img src="../assets/img/forbes.svg" alt="forbes" class="h-8 mb-7 lg:mb-0">
                <img src="../assets/img/cnbc.svg" alt="cnbn" class="h-12 mb-7 lg:mb-0">
                <img src="../assets/img/bloomberg.svg" alt="bloomberg" class="h-12 mb-7 lg:mb-0">
                <img src="../assets/img/reuters.svg" alt="reuters" class="h-10 mb-7 lg:mb-0">
                <img src="../assets/img/cnn.svg" alt="cnn" class="h-10 lg:mb-0">
            </div>
            <div class="mt-10 lg:mt-28 mb-2">
                <p class="text-center text-[2.3rem] lg:text-[4rem] leading-[3rem] lg:leading-[4.3rem] heading_paragraph">
                    Elevate
                    Your Financial <br> Journey with RAFT
                </p>
                <p class="text-center gray02 mt-6 leading-5 mx-4 heading_paragraph">RAFT offers a world of financial
                    possibilities. From
                    investments to payments, <br class="hidden lg:block"> we've got you covered.
                    Join us and unlock your financial potential today.</p>
            </div>
        </div>

        <div class="container mx-auto lg:px-5">
            <div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-7 mx-4 lg:mx-0 lg:mb-8">
                <div class="col-span-5 black01 px-8 pb-8 rounded-lg mb-6 lg:mb-0">
                    <div class="flex flex-col items-center content-bg pt-8 relative">
                        <div class="black02 flex items-center py-[0.6rem] px-[1rem] shadow rounded-xl mb-3">
                            <img src="../assets/img/arrow.svg" alt="arrow" class="h-10">
                            <p class="text-sm mx-4">+ $22.15 Received from Nguyen Shane</p>
                        </div>
                        <div class="black02 flex items-center py-[0.6rem] px-[1.2rem] shadow rounded-xl mb-3">
                            <img src="../assets/img/arrow.svg" alt="arrow" class="h-10">
                            <p class=" text-md mx-4">+ $300.52 Received from Cooper Kristin</p>
                        </div>
                        <div class="black02 flex items-center py-[0.6rem] px-[1rem] shadow rounded-xl mb-3">
                            <img src="../assets/img/arrow.svg" alt="arrow" class="h-10">
                            <p class="text-sm mx-4">+ $50.00 Received from Miles Esther</p>
                        </div>
                        <div class="content-cover absolute w-full h-full top-0 bottom-0 "></div>
                    </div>
                    <div class="mt-8">
                        <p class=" text-2xl mb-3">Seamless Payments</p>
                        <p class="gray02 text-sm font-light">Enjoy secure, seamless transactions that make managing your
                            money a breeze.</p>
                    </div>
                </div>
                <div class="col-span-3 black01 pl-8 pb-8 rounded-lg mb-6 lg:mb-0">
                    <div class="flex flex-col items-end content-bg pt-8 relative">
                        <div
                            class="black02 flex items-center py-[0.6rem] px-[1rem] shadow rounded-tl-xl rounded-bl-xl mb-3">
                            <img src="../assets/img/crypto.svg" alt="arrow" class="h-10">
                            <p class=" text-sm ml-4 mr-16 lg:mr-36">Cryptocurrency</p>
                        </div>
                        <div
                            class="black02 flex items-center py-[0.6rem] px-[1.2rem] shadow rounded-tl-xl rounded-bl-xl mb-3">
                            <img src="../assets/img/money.svg" alt="arrow" class="h-10">
                            <p class=" text-md ml-4 mr-16 lg:mr-36">Smart Portfolio Investing</p>
                        </div>
                        <div
                            class="black02 flex items-center py-[0.6rem] px-[1rem] shadow rounded-tl-xl rounded-bl-xl mb-3">
                            <img src="../assets/img/invest.svg" alt="arrow" class="h-10">
                            <p class=" text-sm ml-4 mr-16 lg:mr-36">Sustainable Investing</p>
                        </div>
                        <div class="content-cover absolute w-full h-full top-0 bottom-0 "></div>
                    </div>
                    <div class="mt-8">
                        <p class=" text-2xl mb-3">Smart Investing</p>
                        <p class="gray02 text-sm font-light">Grow your wealth confidently with our personalized investment
                            solutions, tailored to your financial goals.</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-7 mx-4 lg:mx-0">
                <div class="col-span-3 black01 pl-8 pb-8 rounded-lg mb-6 lg:mb-0">
                    <div class="flex flex-col items-center content-bg pt-20 relative">
                        <div class="black02 rounded-lg p-4">
                            <div class="flex items-center mr-16 mb-3">
                                <img src="../assets/img/user.svg" alt="user" class="mr-3 h-12">
                                <div>
                                    <p class=" text-md">Wade Warren</p>
                                    <p class=" text-xs gray02">Private wealth manager</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <p class=" text-xs">Send message</p>
                                <img src="../assets/img/chat-bubble-left.svg" alt="chat" class="h-5">
                            </div>
                        </div>
                        <div class="content-cover absolute w-full h-full top-0 bottom-0 "></div>
                    </div>
                    <div class="mt-20">
                        <p class=" text-2xl mb-3">Wealth Management</p>
                        <p class="gray02 text-sm font-light">Make informed decisions for your financial future with our
                            wealth management expertise.</p>
                    </div>
                </div>
                <div class="col-span-5 black01 px-8 pb-8 rounded-lg mb-6 lg:mb-0">
                    <div class="flex flex-col items-center content-bg pt-14 relative">
                        <div>
                            <div class="flex">
                                <img src="../assets/img/wallet.svg" alt="wallet" class="h-14 mx-[0.3rem] mb-[0.6rem]">
                                <img src="../assets/img/ticket.svg" alt="ticket" class="h-14 mx-[0.3rem] mb-[0.6rem]">
                                <img src="../assets/img/bank-notes.svg" alt="bank-notes"
                                    class="h-14 mx-[0.3rem] mb-[0.6rem]">
                            </div>
                            <div class="flex">
                                <img src="../assets/img/bag.svg" alt="bag" class="h-14 mx-[0.3rem]">
                                <img src="../assets/img/gift.svg" alt="gift" class="h-14 mx-[0.3rem]">
                                <img src="../assets/img/note.svg" alt="note" class="h-14 mx-[0.3rem]">
                            </div>
                        </div>
                        <div class="content-cover absolute w-full h-full top-0 bottom-0 "></div>
                    </div>
                    <div class="mt-[5.8rem]">
                        <p class=" text-2xl mb-3">Financial Planning</p>
                        <p class="gray02 text-sm font-light">Achieve your financial dreams with our comprehensive financial
                            planning services, guiding you toward a secure future.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto py-20">
            <p
                class="text-5xl text-center mt-5 text-[2.2rem] lg:text-[4rem] leading-[3rem] lg:leading-[4.3rem] heading_paragraph">
                Your Financial Freedom, <br class="hidden lg:block"> Your Way</p>
            <p class="text-sm gray02 text-center leading-5 mt-4 mx-4 heading_paragraph">We believe that managing your
                finances should be
                effortless
                and cost-effective. <br class="hidden lg:block"> That's why we offer you the freedom you deserve</p>
            <img src="../assets/img/img_2.svg" alt="img_2" class="mt-20">
            <div class="grid lg:grid-cols-3 gap-12 mt-14 mx-4">
                <div>
                    <div class="flex items-center mb-1">
                        <img src="../assets/img/money-note.svg" alt="money-note" class="h-6 mr-2">
                        <p class=" text-[1.1rem]">No minimum balance fees</p>
                    </div>
                    <p class="text-[0.9rem] gray02">Say goodbye to minimum balance fees. Your account, your balance—no
                        hidden
                        charges</p>
                </div>
                <div>
                    <div class="flex items-center mb-1">
                        <img src="../assets/img/circle-stack.svg" alt="circle-stack" class="h-6 mr-2">
                        <p class=" text-[1.1rem]">No monthly fees</p>
                    </div>
                    <p class="text-[0.9rem] gray02">Bank with us without worrying about monthly fees. Keep more of your
                        money
                        where it belongs—in your
                        account</p>
                </div>
                <div>
                    <div class="flex items-center mb-1">
                        <img src="../assets/img/money-note.svg" alt="money-note" class="h-6 mr-2">
                        <p class=" text-[1.1rem]">No bank transfer fees</p>
                    </div>
                    <p class="text-[0.9rem] gray02">Seamlessly transfer funds without the extra cost. Send and receive money
                        with
                        zero bank transfer fees.</p>
                </div>
            </div>
        </div>

        <div class=" py-10 px-6 lg:p-12 green01 text">
            <p class="text-[3.3rem] lg:text-[8rem] leading-tight text-black">Smart investments, secure payments,
                and expert guidance, all in one place.</p>
        </div>

        <div class="container mx-auto px-5 py-16">
            <p class="text-[2.2rem] lg:text-[3.5rem] leading-tight my-5">Confidently Shape Your <br> Financial
                Future</p>
            <p class="gray02 text-sm leading-5"> At RAFT, we empower you to confidently shape your financial future.Our
                modern <br class="hidden lg:block"> approach simplifies
                saving and investing, making it easier than ever.</p>
            <div class="grid lg:grid-cols-2 gap-[4rem] mt-16">
                <div class="p-6 lg:p-10 black01 rounded-lg">
                    <p class=" text-[1.8rem] mb-2">Spend better</p>
                    <p class="gray02 text-sm leading-tight">Set and achieve financial goals with ease, automate your
                        <br class="hidden lg:block"> savings, and watch your money grow without the stress.
                    </p>
                    <div class="py-10 lg:py-24 content-bg">
                        <img src="../assets/img/money-send.svg" alt="money-send" class="m-auto h-36 lg:h-52">
                    </div>
                </div>
                <div class="p-6 lg:p-10 black01 rounded-lg">
                    <p class=" text-[1.8rem] mb-2">Invest better</p>
                    <p class="gray02 text-sm leading-tight">Set and achieve financial goals with ease, automate your
                        <br class="hidden lg:block"> savings, and watch your money grow without the stress.
                    </p>
                    <div class="py-10 lg:py-24 content-bg">
                        <img src="../assets/img/wallet-minus.svg" alt="wallet-minus.svg" class="mx-auto h-36 lg:h-52">
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center mt-12">
                <div class="flex flex-col items-center">
                    <p class=" text-[1.3rem] lg:text-[4rem]"><span class="cities">50</span>+</p>
                    <p class="gray02 text-xs lg:text-sm">CITIES</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class=" text-[1.3rem] lg:text-[4rem]"><span class="transactions">50</span>,000+</p>
                    <p class="gray02 text-xs lg:text-sm">TRANSACTIONS</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class=" text-[1.3rem] lg:text-[4rem]">3M+</p>
                    <p class="gray02 text-xs lg:text-sm">USERS</p>
                </div>
                <div class="flex flex-col items-center">
                    <p class=" text-[1.3rem] lg:text-[4rem]">5</p>
                    <p class="gray02 text-xs lg:text-sm">USER RATINGS</p>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <img src="../assets/img/img_3.svg" alt="img_3">
        </div>

        <div class="container mx-auto px-5 py-16">
            <p class="text-green text-xs text-center">INTRODUCING</p>
            <p class="text-[2.2rem] lg:text-[3.5rem] leading-tight text-center my-4">Introducing RAFT's Next- <br> Gen Cards
            </p>
            <p class="text-sm gray02 text-center">Discover RAFT's latest innovation – our new cards. Elevate your banking
                <br class="hidden lg:block">
                experience with cutting-edge features, security, and unprecedented <br class="hidden lg:block"> convenience.
            </p>
            <img src="../assets/img/card.svg" alt="card" class="block mx-auto my-20 card">
            <div class="grid lg:grid-cols-3 gap-12 mt-14 mx-4">
                <div>
                    <div class="flex items-center mb-1">
                        <img src="../assets/img/document-duplicate.svg" alt="document-duplicate" class="h-6 mr-2">
                        <p class=" text-[1.1rem]">Contactless Technology</p>
                    </div>
                    <p class="text-[0.9rem] gray02">Our new cards come equipped with contactless technology, allowing you to
                        make
                        swift, secure payments with a simple tap.</p>
                </div>
                <div>
                    <div class="flex items-center mb-1">
                        <img src="../assets/img/identification.svg" alt="identification" class="h-6 mr-2">
                        <p class=" text-[1.1rem]">Personalization</p>
                    </div>
                    <p class="text-[0.9rem] gray02">Customize your card to reflect your unique style. Choose from a range of
                        designs that suit your personality.</p>
                </div>
                <div>
                    <div class="flex items-center mb-1">
                        <img src="../assets/img/lock-closed.svg" alt="lock-closed" class="h-6 mr-2">
                        <p class=" text-[1.1rem]">Enhanced Security</p>
                    </div>
                    <p class="text-[0.9rem] gray02">Your peace of mind is our priority. Our cards feature advanced security
                        measures to protect your transactions and data.</p>
                </div>
            </div>
        </div>

        <div class="green01 text-black p-12">
            <p class="text-[2.2rem] lg:text-[3.5rem] text-center leading-tight">Join over 3 million <br> members</p>
            <div class="flex my-16 ">
                <div class="border-l-2 border-black px-6 flex flex-col justify-between">
                    <p class="text-[1.5rem]">RAFT has transformed my approach to finance. Their smart investing options
                        have helped me
                        grow my
                        wealth, and their user-friendly platform makes managing my money a breeze. I've never
                        felt more
                        confident about my financial future.
                    </p>
                    <div class="my-3 flex justify-between items-center">
                        <div>
                            <p class="font-semibold">Robert Fox</p>
                            <p class="text-xs">Happy RAFT User</p>
                        </div>
                        <img src="../assets/img/user_1.svg" alt="user_1" class="h-14">
                    </div>
                </div>
                <div class="border-l-2 border-black px-6 flex flex-col justify-between">
                    <p class="text-[1.5rem]">
                        I can't express how grateful I am to RAFT. Their wealth management services have been a
                        game-changer
                        for my family's financial security. The expert guidance and personalized strategies have
                        given us
                        peace of mind, knowing that our future is in capable hands.
                    </p>
                    <div class="my-3 flex justify-between items-center">
                        <div>
                            <p class="font-semibold">Cameron Williamson</p>
                            <p class="text-xs">Happy RAFT User</p>
                        </div>
                        <img src="../assets/img/user_2.svg" alt="user_2" class="h-14">
                    </div>
                </div>
                <div class="border-l-2 border-black px-6 flex flex-col justify-between">
                    <p class="text-[1.5rem]">RAFT's financial planning services have been a lifeline for me. I always
                        struggled with managing
                        my
                        money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a
                        game-changer in achieving my financial dreams</p>
                    <div class="my-3 flex justify-between items-center">
                        <div>
                            <p class="font-semibold">Esther Howard</p>
                            <p class="text-xs">Happy RAFT User</p>
                        </div>
                        <img src="../assets/img/user_3.svg" alt="user_3" class="h-14">
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-5 mt-10 lg:mt-20">
            <p class="text-[3.5rem] lg:text-[4.3rem] leading-tight mb-7">Frequently asked <br> questions</p>
            <div v-for="(faq, index) in faqs" :key="index" @click="faqs[index].isOpen = !faqs[index].isOpen">
                <div class="py-6 border-b gray04">
                    <div class="flex justify-between">
                        <p class="text-[1.1rem]">{{ faq.question }}</p>
                        <button><i class="fa-solid fa-chevron-up"
                                :class="faqs[index].isOpen ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'"></i></button>
                    </div>
                    <p class="text-sm gray02 mt-3" :class="faqs[index].isOpen ? 'visible' : 'invisible'">{{ faq.answer }}
                    </p>
                </div>
            </div>
            <div class="pt-28 pb-12 border-b gray04">
                <img src="../assets/img/raft.svg" alt="raft" class=" h-24 lg:h-32">
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-7 items-center py-12">
                <div class="lg:col-span-2 flex items-center p-3 border border-dashed rounded-lg mb-10 lg:mb-0">
                    <img src="../assets/img/QR_code.svg" alt="qr_code" class=" h-20">
                    <div class="flex flex-col ml-3">
                        <p class="text-[0.9rem] mb-2 leading-tight">Scan to download App on the <br> Playstore and Appstore.
                        </p>
                        <div class="flex">
                            <img src="../assets/img/ion_logo-google-playstore.svg" alt="ion_logo_google-playstore"
                                class="mr-2">
                            <img src="../assets/img/ic_baseline-apple.svg" alt="ic_baseline-apple">
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-5 flex justify-between lg:justify-around">
                    <div>
                        <p class="text-[1.2rem] mb-2">About us</p>
                        <p class="text-[0.9rem] mb-1">Our company</p>
                        <p class="text-[0.9rem] mb-1">Careers</p>
                        <p class="text-[0.9rem]">Press kills</p>
                    </div>
                    <div>
                        <p class="text-[1.2rem] mb-2">Legal</p>
                        <p class="text-[0.9rem] mb-1">Terms of use</p>
                        <p class="text-[0.9rem] mb-1">Privacy policy</p>
                        <p class="text-[0.9rem]">About us</p>
                    </div>
                    <div>
                        <p class="text-[1.2rem] mb-2">Support</p>
                        <p class="text-[0.9rem] mb-1">Contact us</p>
                        <p class="text-[0.9rem]">FAQ</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center pb-10">
                <div class="flex items-center">
                    <p class=" text-[0.8rem] lg:text-sm">English (United Kingdom)</p>
                    <img src="../assets/img/chevron-bottom.svg" alt="chevron-bottom" class="h-2 ml-5">
                </div>
                <div class="flex items-center">
                    <img src="../assets/img/ph_copyright-light.svg" alt="ph_copyright-light" class="h-4">
                    <p class="text-xs ml-1">Raft Corp, LLC.</p>
                </div>
            </div>
        </div>


    </div>
</template> 

<script setup>
import { gsap } from 'gsap'
import SplitType from 'split-type'
const showMenu = ref(false)

onMounted(() => {
    const heading = new SplitType('.heading', { types: 'words' });
    const paragraph = new SplitType('.heading_paragraph', { types: 'lines' })
    const text = new SplitType('.text', { types: 'words' });
    const heroElements = [...heading.words, ...paragraph.lines, ...text.words];


    gsap.from(heroElements, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: { each: 0.4 },
        ease: 'ease',
    })

    gsap.from('.comp img', {
        y: 15,
        opacity: 0,
        duration: 0.8,
        stagger: { each: 0.4 },
        ease: 'power2.inOut',
    })


})


const faqs = ref([
    {
        question: "How do I create an account with RAFT?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum dolores quod aliquid ad temporibus.",
        isOpen: false
    }, {
        question: "How does RAFT ensure the security of my financial data?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum dolores quod aliquid ad temporibus.",
        isOpen: false
    }
    , {
        question: "What types of transactions can I perform with RAFT?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum dolores quod aliquid ad temporibus.",
        isOpen: false
    }, {
        question: "What benefits does RAFT offer for wealth management?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum dolores quod aliquid ad temporibus.",
        isOpen: false
    }
])
</script>

<style>
.visible {
    display: block;
}

.invisible {
    display: none;
}</style>