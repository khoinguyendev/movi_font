import React from "react";

const Introduce = () => {
    return (
        <section
            id="block-241"
            data-index="0"
            data-type="3"

        >
            <div
                className="py-8 md:py-10 lg:py-14 landing:bg-transparent bg-pink-50"
                style={{ "--grad-rgb-color": "253 242 248" }}
            >
                <div className="mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8">
                    <div
                        data-root-margin="10"
                        className="landing-fadeUp-child grid grid-cols-1 items-center gap-6 sm:grid-cols-2"
                    >
                        {/* Left Content */}
                        <div className="order-2 sm:order-1 sm:col-start-1">
                            <div className="text-left">
                                <h1 className="service-page-title mb-2 text-2xl font-bold text-pink-600 landing:text-lpTitle md:mb-6 md:text-3xl lg:text-4xl">
                                    Mua vé xem phim Online trên MoMo
                                </h1>
                                <div className="service-page-description">
                                    <p className="text-lg font-light text-gray-600 landing:text-lpText">
                                        Với nhiều ưu đãi hấp dẫn và kết nối với tất cả các rạp lớn phủ
                                        rộng khắp Việt Nam. Đặt vé ngay tại MoMo!
                                    </p>
                                    <div className="mt-4 grid grid-cols-1 gap-y-3">
                                        {/* Features */}
                                        {[
                                            "Mua vé Online, trải nghiệm phim hay",
                                            "Đặt vé an toàn trên MoMo",
                                            "Tha hồ chọn chỗ ngồi, mua bắp nước tiện lợi.",
                                            "Lịch sử đặt vé được lưu lại ngay",
                                        ].map((text, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-nowrap items-center"
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="block shrink-0"
                                                >
                                                    <circle
                                                        opacity="0.1"
                                                        cx="12"
                                                        cy="12"
                                                        r="12"
                                                        fill="#A50064"
                                                    />
                                                    <path
                                                        d="M17.3332 8L9.99984 15.3333L6.6665 12"
                                                        stroke="#A50064"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="note pl-2 text-md text-gray-600 landing:text-lpText">
                                                    <strong>{text.split(",")[0]}</strong>
                                                    {text.split(",")[1]}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Action Button */}
                            <div className="mt-7">
                                <div className="flex space-x-3 md:space-x-4 md:landing:inline-block">
                                    <button
                                        rel="noreferrer"
                                        className="btn-primary btn-primary-landing"
                                        data-name="button-action-without-qr"
                                    >
                                        ĐẶT VÉ NGAY
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 sm:order-2 sm:col-start-2">
                            <div className="overflow-hidden rounded-md">
                                <a
                                    href="/cinema#cumrap"
                                    target=""
                                    className="relative block aspect-[75/42] w-full overflow-hidden"
                                >
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: 0,
                                            margin: 0,
                                            padding: 0,
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                        }}
                                    >
                                        <img
                                            alt="Home"
                                            src="https://homepage.momocdn.net/img/momo-amazone-s3-api-241016093634-638646681942392376.png"
                                            decoding="async"
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                boxSizing: "border-box",
                                                padding: 0,
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: 0,
                                                height: 0,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                minHeight: "100%",
                                                maxHeight: "100%",
                                            }}
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
