import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

function ProductDetailBody() {
  const productDetailFreeShippingReturnPolicy = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifySelf: "start",
    flexWrap: "nowrap",
  };

  const productDetailFreeShippingReturnPolicyImage = {
    marginRight: ".75rem",
    height: "3.125rem",
    width: "3.125rem",
  };

  const productDetailLinkShop = {
    // color: "rgba(0, 0, 0, .87)",
    color: "#05a",
    fontSize: "13px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  const productDetailArrowStyle = {
    height: "10px",
    width: "10px",
    margin: "0 5px",
  };
  return (
    <Box className="ProductDetailBody" sx={{ marginTop: "125px" }}>
      <Box sx={{ transition: "margin-top .3s cubic-bezier(.4,0,.2,1)" }}>
        <Box className="page-product page-product--mall">
          <Box
            className="tracking-impression-placeholder"
            sx={{
              position: "fixed",
              zIndex: "99999",
              bottom: "0px",
              left: "0px",
            }}
          ></Box>
          <Box
            role="main"
            className="container"
            sx={{
              paddingBottom: "4.375rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "1200px",
            }}
          >
            <Box
              className="flex items-center page-product__breadcrumb"
              sx={{
                height: "1rem",
                marginTop: "1.25rem",
                whiteSpace: "nowrap",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Link href="/" sx={productDetailLinkShop}>
                Shopee
              </Link>
              <img
                alt="icon arrow right"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
                style={{ ...productDetailArrowStyle }}
              />
              <Link
                href="/Nhà-Sách-Online-cat.11036863"
                sx={productDetailLinkShop}
              >
                Nhà Sách Online
              </Link>
              <img
                alt="icon arrow right"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
                style={{ ...productDetailArrowStyle }}
              />
              <Link
                href="/Sách-Tiếng-Việt-cat.11036863.11108503"
                sx={productDetailLinkShop}
              >
                Sách Tiếng Việt
              </Link>
              <img
                alt="icon arrow right"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
                style={{ ...productDetailArrowStyle }}
              />
              <Link
                href="/Văn-Học-Giả-Tưởng-cat.11036863.11108503.11108521"
                sx={productDetailLinkShop}
              >
                Văn Học Giả Tưởng
              </Link>
              <img
                alt="icon arrow right"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/966fbe37fe1c72e3f2dd.svg"
                style={{ ...productDetailArrowStyle }}
              />
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "rgba(0, 0, 0, .87)",
                  fontSize: "13px",
                }}
              >
                Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Higashino Keigo)
              </Typography>
            </Box>
            <section
              className="product-briefing flex card"
              style={{ marginTop: "1.25rem", padding: "0" }}
            >
              <h1 className="Bf9ap6">
                Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Higashino Keigo)
              </h1>
              <Box></Box>
              <section className="TFDXyQ">
                <h2 className="Bf9ap6">Product Image Section</h2>
                <Box className="flex flex-column">
                  <Box className="TMw1ot">
                    <Box className="xxW0BG">
                      <Box className="HJ5l1F" sx={{ display: "block" }}>
                        <Box className="shopee-image-placeholder CCU0Uo">
                          <svg
                            enable-background="new 0 0 54 61"
                            viewBox="0 0 54 61"
                            role="img"
                            className="stardust-icon stardust-icon-shopee icon-shopee-tiny"
                          >
                            <path
                              stroke="none"
                              d="M35.67,44.95 C35.34,47.70 33.67,49.91 31.09,51.01 C29.65,51.63 27.72,51.96 26.19,51.85 C23.81,51.76 21.57,51.18 19.50,50.12 C18.77,49.74 17.67,48.99 16.82,48.28 C16.61,48.10 16.58,47.99 16.73,47.78 C16.80,47.67 16.94,47.46 17.25,47.01 C17.71,46.34 17.76,46.26 17.81,46.18 C17.96,45.96 18.19,45.94 18.42,46.12 C18.45,46.14 18.45,46.14 18.47,46.16 C18.50,46.19 18.50,46.19 18.59,46.26 C18.68,46.33 18.74,46.37 18.76,46.39 C20.99,48.13 23.58,49.13 26.20,49.24 C29.84,49.19 32.46,47.55 32.93,45.03 C33.44,42.27 31.27,39.88 27.02,38.54 C25.69,38.13 22.33,36.78 21.71,36.42 C18.80,34.71 17.44,32.47 17.64,29.71 C17.93,25.88 21.49,23.03 25.98,23.01 C27.98,23.01 29.99,23.42 31.91,24.23 C32.60,24.52 33.81,25.18 34.23,25.50 C34.47,25.68 34.52,25.88 34.38,26.11 C34.31,26.24 34.18,26.44 33.91,26.87 L33.91,26.87 C33.55,27.44 33.54,27.46 33.46,27.59 C33.32,27.80 33.15,27.82 32.90,27.66 C30.84,26.28 28.55,25.58 26.04,25.53 C22.91,25.59 20.57,27.45 20.42,29.99 C20.38,32.28 22.09,33.95 25.80,35.22 C33.33,37.64 36.21,40.48 35.67,44.95 M26.37,5.43 C31.27,5.43 35.27,10.08 35.46,15.90 L17.29,15.90 C17.47,10.08 21.47,5.43 26.37,5.43 M51.74,17.00 C51.74,16.39 51.26,15.90 50.66,15.90 L50.64,15.90 L38.88,15.90 C38.59,8.21 33.10,2.08 26.37,2.08 C19.64,2.08 14.16,8.21 13.87,15.90 L2.07,15.90 C1.48,15.91 1.01,16.40 1.01,17.00 C1.01,17.03 1.01,17.05 1.01,17.08 L1.00,17.08 L2.68,54.14 C2.68,54.25 2.69,54.35 2.69,54.46 C2.69,54.48 2.70,54.50 2.70,54.53 L2.70,54.60 L2.71,54.61 C2.96,57.19 4.83,59.26 7.38,59.36 L7.38,59.37 L44.80,59.37 C44.81,59.37 44.83,59.37 44.85,59.37 C44.87,59.37 44.88,59.37 44.90,59.37 L44.98,59.37 L44.98,59.36 C47.57,59.29 49.67,57.19 49.89,54.58 L49.89,54.58 L49.90,54.54 C49.90,54.51 49.90,54.49 49.90,54.46 C49.90,54.39 49.91,54.33 49.91,54.26 L51.74,17.05 L51.74,17.05 C51.74,17.04 51.74,17.02 51.74,17.00"
                            ></path>
                          </svg>
                        </Box>
                        <Box className="center Oj2Oo7">
                          <img
                            className="PhxDN7"
                            src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lmedrzmd9k2ncf_tn"
                          />
                          <video
                            data-dashjs-player="true"
                            className="tpgcVs"
                            // autoplay=""
                            poster="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lmedrzmd9k2ncf_tn"
                            webkit-playsinline="webkit-playsinline"
                            src="https://cvf.shopee.vn/file/60dea3c1f5d8d22555d23feb2423954a"
                            data-video="0"
                          ></video>
                        </Box>
                        <img
                          alt="icon video replay"
                          className="_PPt_v"
                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5e1da1405ecbc74f70fa.svg"
                        />
                      </Box>
                      <img
                        alt=""
                        className="WgnznX"
                        src="https://down-vn.img.susercontent.com/file/vn-50009109-41988b329ed6650c252d8644e36de2a8"
                      />
                    </Box>
                  </Box>
                  <Box className="airUhU">
                    <Box className="UBG7wZ">
                      <Box className="jA1mTx">
                        <Box className="SarUkj shopee-image-container">
                          <picture>
                            <img
                              className="IMAW1w"
                              src="https://down-vn.img.susercontent.com/file/4d5a5aeb9c230eace8098cde7195d42f_tn"
                            />
                          </picture>
                        </Box>
                        <img
                          alt=""
                          className="WgnznX"
                          src="https://down-vn.img.susercontent.com/file/vn-50009109-41988b329ed6650c252d8644e36de2a8"
                        />
                        <img
                          alt="icon video play"
                          className="NYFAyb"
                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/160486046c4b1eafcb63.svg"
                        />
                        <Box className="wOzCmT thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box className="UBG7wZ">
                      <Box className="jA1mTx">
                        <Box className="SarUkj shopee-image-container">
                          <picture>
                            <img
                              className="IMAW1w"
                              src="https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lmedrzmd9k2ncf_tn"
                            />
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box className="UBG7wZ">
                      <Box className="jA1mTx">
                        <Box className="SarUkj shopee-image-container">
                          <picture>
                            <img
                              className="IMAW1w"
                              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgzyx3xcbfjd4_tn"
                            />
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box className="UBG7wZ">
                      <Box className="jA1mTx">
                        <Box className="SarUkj shopee-image-container">
                          <picture>
                            <img
                              className="IMAW1w"
                              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgzyx3xdpzzb7_tn"
                            />
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Box className="UBG7wZ">
                      <Box className="jA1mTx">
                        <Box className="SarUkj shopee-image-container">
                          <picture>
                            <img
                              className="IMAW1w"
                              src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgzyx3xf4kf4f_tn"
                            />
                          </picture>
                        </Box>
                        <Box className="thumbnail-selected-mask"></Box>
                      </Box>
                    </Box>
                    <Button className="shopee-icon-Button nVAzDy CAvqYR">
                      <img
                        alt="icon arrow left bold"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6abcdf029c79bbafd9.svg"
                      />
                    </Button>
                    <Button className="shopee-icon-Button nVAzDy lWmpR1">
                      <img
                        alt="icon arrow right bold"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8120e456c268426c4054.svg"
                      />
                    </Button>
                  </Box>
                </Box>
                <Box
                  className="flex justify-center items-center"
                  sx={{ marginTop: "15px" }}
                >
                  <Box className="flex items-center idmlsn">
                    <Box className="rhG6k7">Chia sẻ:</Box>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-fm Vo8Ebs"
                      aria-label="Share on Messenger"
                    ></Button>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-fb Vo8Ebs"
                      aria-label="Share on Facebook"
                    ></Button>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-pinterest Vo8Ebs"
                      aria-label="Share on Pinterest"
                    ></Button>
                    <Button
                      className="sprite-product-sharing sprite-product-sharing-twitter Vo8Ebs"
                      aria-label="Share on Twitter"
                    ></Button>
                  </Box>
                  <Box className="flex items-center feDSnr">
                    <Button className="w2JMKY">
                      <svg width="24" height="20" className="vgMiJB">
                        <path
                          d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                          stroke="#FF424F"
                          stroke-width="1.5"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <Box className="rhG6k7">Đã thích (1,5k)</Box>
                    </Button>
                  </Box>
                </Box>
              </section>
              <section className="flex flex-auto i9t0tr">
                <h2 className="Bf9ap6">Product Information Section</h2>
                <Box className="flex-auto flex-column DXQgih">
                  <Box className="WBVL_7">
                    <img
                      alt="mall inline badge"
                      className="fclWZr"
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/40a453875daccf8cc324.svg"
                    />
                    <Typography>
                      Sách - Điều Kỳ Diệu Của Tiệm Tạp Hóa Namiya (Higashino
                      Keigo)
                    </Typography>
                  </Box>
                  <Box className="flex asFzUa">
                    <Button className="flex e2p50f">
                      <Box className="F9RHbS dQEiAI">5.0</Box>
                      <Box className="x1i_He">
                        <Box className="T1549_">
                          <Box className="sAOZ6s">
                            <Box className="ZDu7mK" sx={{ width: "100%" }}>
                              <Box className="R6CPBG"></Box>
                            </Box>
                            <Box className="VAir_o"></Box>
                          </Box>
                          <Box className="sAOZ6s">
                            <Box className="ZDu7mK" sx={{ width: "100%" }}>
                              <Box className="R6CPBG"></Box>
                            </Box>
                            <Box className="VAir_o"></Box>
                          </Box>
                          <Box className="sAOZ6s">
                            <Box className="ZDu7mK" sx={{ width: "100%" }}>
                              <Box className="R6CPBG"></Box>
                            </Box>
                            <Box className="VAir_o"></Box>
                          </Box>
                          <Box className="sAOZ6s">
                            <Box className="ZDu7mK" sx={{ width: "100%" }}>
                              <Box className="R6CPBG"></Box>
                            </Box>
                            <Box className="VAir_o"></Box>
                          </Box>
                          <Box className="sAOZ6s">
                            <Box className="ZDu7mK" sx={{ width: "95.3898%" }}>
                              <Box className="R6CPBG"></Box>
                            </Box>
                            <Box className="VAir_o"></Box>
                          </Box>
                        </Box>
                      </Box>
                    </Button>
                    <Button className="flex e2p50f">
                      <Box className="F9RHbS">2,4k</Box>
                      <Box className="x1i_He">đánh giá</Box>
                    </Button>
                    <Box className="flex mnzVGI">
                      <Box className="AcmPRb">5,6k</Box>
                      <Box className="aleSBU">đã bán</Box>
                    </Box>
                    <Button className="YysGiT">Tố cáo</Button>
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
                    <Box className="flex flex-column">
                      <Box className="flex flex-column CWiSMQ">
                        <section
                          className="flex items-center"
                          aria-live="polite"
                        >
                          <h2 className="Bf9ap6">Price Section</h2>
                          <Box className="flex items-center QAc7_y">
                            <Box className="qg2n76">₫105.000</Box>
                            <Box className="flex items-center">
                              <Box className="G27FPf">₫84.000</Box>
                              <Box className="o_z7q9">20% giảm</Box>
                            </Box>
                          </Box>
                        </section>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="at_ZtL">
                    <Box className="flex flex-column">
                      <section className="flex KIoPj6 uVwYBh">
                        <h3 className="Dagtcd">Vận chuyển</h3>
                        <Box className="CWIkAx oqSQTf">
                          <Box className="flex"></Box>
                          <Box className="wigEZ0">
                            <img
                              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
                              height="20"
                              className="Fy4A_Q"
                            />
                            <Box className="ohuenU">
                              <Box className="nDYwZC">
                                <Box>Miễn phí vận chuyển</Box>
                              </Box>
                            </Box>
                            <Box className="H5IRYN">
                              <img
                                alt="icon shipped locally"
                                className="i9sDsG"
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/baa823ac1c58392c2031.svg"
                              />
                            </Box>
                            <Box className="flex flex-column JLop8B">
                              <Box className="flex items-center C0ngbq">
                                <Box className="Zg6PS1">Vận chuyển tới</Box>
                                <Box className="flex items-center oTmzEO">
                                  <Box className="flex items-center">
                                    <Box className="my0ZcO">
                                      <Button className="flex items-center">
                                        <Typography className="awxJLd">
                                          Phường Tân An, Thành Phố Buôn Ma Thuột
                                        </Typography>
                                        <img
                                          alt="icon arrow down"
                                          className="RhLDj0"
                                          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c98ab2426710d89c9f14.svg"
                                        />
                                      </Button>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                              <Box className="BWGW5I">
                                <Box className="Zg6PS1">phí vận chuyển</Box>
                                <Box>
                                  <Box
                                    className="shopee-drawer"
                                    id="pc-drawer-id-0"
                                  >
                                    <Box className="flex items-center PZGOkt">
                                      ₫0
                                      <img
                                        alt="icon arrow down"
                                        className="eTGwg9"
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/c98ab2426710d89c9f14.svg"
                                      />
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </section>
                      <Box className="flex KIoPj6 W5LiQM">
                        <Box className="flex flex-column">
                          <section className="flex items-center OaFP0p">
                            <h3 className="Dagtcd">Số lượng</h3>
                            <Box className="flex items-center">
                              <Box sx={{ marginRight: "15px" }}>
                                <Box className="_9m0o30 shopee-input-quantity">
                                  <Button
                                    aria-label="Decrease"
                                    className="suQW3X"
                                  >
                                    <svg
                                      enable-background="new 0 0 10 10"
                                      viewBox="0 0 10 10"
                                      x="0"
                                      y="0"
                                      className="shopee-svg-icon"
                                    >
                                      <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                    </svg>
                                  </Button>
                                  <input
                                    className="suQW3X u00pLG"
                                    // role="spinButton"
                                    // aria-live="assertive"
                                    // aria-valuenow="1"
                                    // value="1"
                                  />
                                  <Typography
                                    aria-live="polite"
                                    className="Bf9ap6"
                                  >
                                    Số lượng 1
                                  </Typography>
                                  <Button
                                    aria-label="Increase"
                                    className="suQW3X"
                                  >
                                    <svg
                                      enable-background="new 0 0 10 10"
                                      viewBox="0 0 10 10"
                                      x="0"
                                      y="0"
                                      className="shopee-svg-icon icon-plus-sign"
                                    >
                                      <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                    </svg>
                                  </Button>
                                </Box>
                              </Box>
                              <Box>60 sản phẩm có sẵn</Box>
                            </Box>
                          </section>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: "15px" }}>
                    <Box className="fnrLi4 high-Button-section">
                      <Box className="bwPwYa high-end-Button-group">
                        <Button
                          className="btn btn-tinted btn--l YuENex a_JvBi"
                          aria-disabled="false"
                        >
                          <img
                            alt="icon-add-to-cart"
                            className="_kL9Hf"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b96050554b3be4feea08.svg"
                          />
                          <Typography>thêm vào giỏ hàng</Typography>
                        </Button>
                        <Button
                          className="btn btn-solid-primary btn--l YuENex"
                          aria-disabled="false"
                        >
                          Mua ngay
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "30px",
                      borderTop: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Box className="gIL8h3">
                      <Box>
                        <Box className="fqmTt_">
                          <Box className="Nm4HEX">
                            <Box
                              className="shopee-drawer _7dS96"
                              id="pc-drawer-id-1"
                            >
                              <Box className="XklnWA flex items-center">
                                <img
                                  className="oZtSFx"
                                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2bcf834c40468ebcb90b.svg"
                                />
                                <Box className="YzLslW">
                                  Đổi ý miễn phí 15 ngày
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="Nm4HEX">
                            <Box
                              className="shopee-drawer _7dS96"
                              id="pc-drawer-id-2"
                            >
                              <Box className="XklnWA flex items-center">
                                <img
                                  className="oZtSFx"
                                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0.png"
                                />
                                <Box className="YzLslW">
                                  Hàng chính hãng 100%
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="Nm4HEX">
                            <Box
                              className="shopee-drawer _7dS96"
                              id="pc-drawer-id-3"
                            >
                              <Box className="XklnWA flex items-center">
                                <img
                                  className="oZtSFx"
                                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/16ead7e0a68c3cff9f32.png"
                                />
                                <Box className="YzLslW">
                                  Miễn phí vận chuyển
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </section>
            </section>
            <section className="r74CsV page-product__shop">
              <h2 className="Bf9ap6">Shop Information Section</h2>
              <Box className="uLQaPg">
                <Link
                  className="lG5Xxv"
                  href="/nhanam59?categoryId=100643&amp;entryPoint=ShopByPDP&amp;itemId=6205418939&amp;upstream=dd"
                >
                  <Box className="H0wYar y8f_ga">
                    <Box className="nkvGdS">
                      <img
                        alt="icon head shot"
                        className="Bk2cVc"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1e1b08f78a2608ccffa9.svg"
                      />
                    </Box>
                    <img
                      alt="click here to visit shop"
                      className="Qm507c"
                      src="https://down-vn.img.susercontent.com/file/vn-11134216-7r98o-lkz0yba84r1974_tn"
                    />
                  </Box>
                  <Box className="aUEg4L">
                    <Box className="official-shop-new-badge">
                      <img
                        alt="mall shop badge"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/483071c49603aa7163a7.png"
                        loading="lazy"
                        width="64"
                        height="16"
                      />
                    </Box>
                  </Box>
                </Link>
                <Box className="PYEGyz">
                  <Box className="fV3TIn">Nhã Nam (Hiệu sách Nhã Nam)</Box>
                  <Box className="mMlpiZ">
                    <Box className="Fsv0YO">Online 9 phút trước</Box>
                  </Box>
                  <Box className="NyRGTK">
                    <Button className="btn btn-tinted btn--s btn--inline wq_EQj">
                      <Typography className="EXxJrT"></Typography>
                      <Typography>Chat ngay</Typography>
                    </Button>
                    <Link
                      className="btn btn-light btn--s btn--inline btn-light--link Z6yFUs"
                      href="/nhanam59?categoryId=100643&amp;entryPoint=ShopByPDP&amp;itemId=6205418939&amp;upstream=dd"
                    >
                      <img
                        alt="icon shop"
                        className="esfDPs"
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/192a8dfc1c23525d396b.svg"
                      />
                      <Typography>xem shop</Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box className="NGzCXN">
                <Box className="YnZi6x">
                  <label className="ffHYws">Đánh giá</label>
                  <Typography className="Cs6w3G">116,3k</Typography>
                </Box>
                <Box className="YnZi6x">
                  <label className="ffHYws">tỉ lệ phản hồi</label>
                  <Typography className="Cs6w3G">78%</Typography>
                </Box>
                <Box className="YnZi6x">
                  <label className="ffHYws">tham gia</label>
                  <Typography className="Cs6w3G">5 năm trước</Typography>
                </Box>
                <Link className="YnZi6x aArpoe" href="/nhanam59#product_list">
                  <label className="ffHYws">Sản phẩm</label>
                  <Typography className="Cs6w3G">2,6k</Typography>
                </Link>
                <Box className="YnZi6x">
                  <label className="ffHYws">thời gian phản hồi</label>
                  <Typography className="Cs6w3G">trong vài giờ</Typography>
                </Box>
                <Box className="YnZi6x">
                  <label className="ffHYws">Người theo dõi</label>
                  <Typography className="Cs6w3G">314k</Typography>
                </Box>
              </Box>
            </section>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          // "&:after": {
          width: "100%",
          height: "4px",
          backgroundColor: "#fff",
          borderTop: "4px solid #d0011b",
          color: "rgba(0, 0, 0, .54)",
          minWidth: "75rem",
          // },
        }}
      ></Box>
      <Box
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, .12)",
          height: "7.5rem",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            margin: "0 auto",
            width: "75rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            height: "100%",
            justifyItems: "center",
            // margin: "0 -.3125rem",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Box sx={productDetailFreeShippingReturnPolicy}>
            <Box sx={productDetailFreeShippingReturnPolicyImage}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/6c502a2641457578b0d5.png"
                height="50px"
                width="50px"
              />
            </Box>
            <Box sx={{ maxWidth: "17.1875rem" }}>
              <Typography sx={{ margin: "0" }}>
                7 ngày miễn phí trả hàng
              </Typography>
              <Typography sx={{ margin: "0" }}>
                Trả hàng miễn phí trong 7 ngày
              </Typography>
            </Box>
          </Box>
          <Box sx={productDetailFreeShippingReturnPolicy}>
            <Box sx={productDetailFreeShippingReturnPolicyImage}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0.png"
                height="50px"
                width="50px"
              />
            </Box>
            <Box sx={{ maxWidth: "17.1875rem" }}>
              <Typography sx={{ margin: "0" }}>Hàng chính hãng 100%</Typography>
              <Typography sx={{ margin: "0" }}>
                Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi
              </Typography>
            </Box>
          </Box>
          <Box sx={productDetailFreeShippingReturnPolicy}>
            <Box sx={productDetailFreeShippingReturnPolicyImage}>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/16ead7e0a68c3cff9f32.png"
                height="50px"
                width="50px"
              />
            </Box>
            <Box sx={{ maxWidth: "17.1875rem" }}>
              <Typography sx={{ margin: "0" }}>Miễn phí vận chuyển</Typography>
              <Typography sx={{ margin: "0" }}>
                Giao hàng miễn phí toàn quốc
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProductDetailBody;
