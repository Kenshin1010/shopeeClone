import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import { useMemo } from "react";

function RegisterFooter() {
  const typographyStylesH6 = () => ({
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: ".75rem",
    fontWeight: 700,
    marginTop: "1.25rem",
    marginBottom: "1.25rem",
    textAlign: "left",
  });

  const getLinkTypographyStyles = useMemo(
    () => ({
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "rgba(0, 0, 0, 0.65)",
      cursor: "pointer",
      fontSize: ".75rem",
      listStyleType: "none",
      textDecoration: "none",
      "&:hover": { color: "#ee4d2d" },
      "& .css-1xylxj1-MuiTypography-root-MuiLink-root": {
        textDecoration: "none",
      },
    }),
    []
  );

  const getLinkStyles = {
    textDecoration: "none",
  };

  const listItemClases = {
    padding: "0",
    paddingBottom: ".5rem",
  };

  const linkClases = {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "start",
    width: "100%",
    height: "16px",
  };

  const imageFooter = () => ({
    backgroundColor: "#fff",
    borderRadius: ".125rem", // Assuming you want 4px rounded corners
    boxShadow: "0 1px 1px rgba(0, 0, 0, .2)",
    boxSizing: "border-box",
    height: "1.875rem",
    marginBottom: ".5rem",
    marginRight: ".5rem",
    overflow: "hidden",
    padding: ".25rem",
    width: "3.75rem",
  });

  const imageFooterApp = () => ({
    backgroundColor: "#fff",
    borderRadius: "2px", // Adjusted for 2px rounded corners
    boxShadow: "0 1px 1px rgba(0, 0, 0, .2)",
    height: "1.5rem",
    marginBottom: ".5rem",
    padding: ".25rem",
    width: "76px",
  });

  const getLinkCountryBoxStyles = () => ({
    "&:not(:last-child)": {
      borderRight: ".5px solid rgba(0, 0, 0, .2)",
    },
    padding: "0 5px",
    cursor: "pointer",
  });

  const getLinkCountryTypographyStyles = () => ({
    color: "rgba(0, 0, 0, .54)",
    lineHeight: "1.5rem",
    fontSize: "14px",
    textDecoration: "none",
    "&:hover": { color: "#ee4d2d" },
  });

  const getPolicyBoxStyles = () => ({
    "&:not(:last-child)": {
      borderRight: "1px solid rgba(0, 0, 0, .09)",
    },
    padding: "0 1.5625rem",
    fontSize: ".75rem",
    textTransform: "uppercase",
    cursor: "pointer",
  });

  const getPolicyLinkStyles = () => ({
    color: "rgba(0, 0, 0, .54)",
    textDecoration: "none",
  });

  const getParagramTypographyStyles = () => ({
    textAlign: "center",
    width: "100%",
    color: "rgba(0, 0, 0, .65)",
    fontSize: ".75rem",
    lineHeight: "1.2rem",
  });

  return (
    <Box component={"footer"}>
      <Container sx={{ marginTop: "30px" }}>
        <Grid container spacing={2}>
          {/* Grid container 1 */}
          <Grid container item xs={12} sm={4} md={5} spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h6" sx={typographyStylesH6}>
                  CHĂM SÓC KHÁCH HÀNG
                </Typography>
                <List>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Trung Tâm Trợ Giúp
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://shopee.vn/blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Shopee Blog
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/79090-[Th%C3%A0nh-vi%C3%AAn-m%E1%BB%9Bi]-Shopee-Mall-l%C3%A0-g%C3%AC?previousPage=search%20recommendation%20bar"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Shopee Mall
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Hướng Dẫn Mua Hàng
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://banhang.shopee.vn/edu/article/13243/ban-hang-online-bat-dau-tu-dau"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Hướng Dẫn Bán Hàng
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/category/59-Thanh-To%C3%A1n/708-V%C3%AD-ShopeePay?page=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Thanh Toán
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/79144-[Shopee-Xu]-C%c3%a1c-c%c3%a2u-h%e1%bb%8fi-th%c6%b0%e1%bb%9dng-g%e1%ba%b7p"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Shopee Xu
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/category/60-%C4%90%C6%A1n-H%C3%A0ng-V%E1%BA%ADn-Chuy%E1%BB%83n/703-%C4%90%C6%A1n-h%C3%A0ng?page=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Vận Chuyển
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/79258-Tr%e1%ba%a3-h%c3%a0ng%2FHo%c3%a0n-ti%e1%bb%81n]-C%e1%ba%a9m-nang-Tr%e1%ba%a3-h%c3%a0ng-ho%c3%a0n-ti%e1%bb%81n"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Trả Hàng &amp; Hoàn Tiền
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/79191-%5BD%E1%BB%8Bch-v%E1%BB%A5%5D-L%C3%A0m-sao-%C4%91%E1%BB%83-li%C3%AAn-h%E1%BB%87-Ch%C4%83m-s%C3%B3c-Kh%C3%A1ch-h%C3%A0ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Chăm Sóc Khách Hàng
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Chính Sách Bảo Hành
                      </Typography>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h6" sx={typographyStylesH6}>
                  VỀ SHOPEE
                </Typography>
                <List>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://careers.shopee.vn/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Giới Thiệu Về Shopee Việt Nam
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://careers.shopee.vn/jobs"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Tuyển Dụng
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/77242"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Điều Khoản Shopee
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://help.shopee.vn/portal/article/77244"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Chính Sách Bảo Mật
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://shopee.vn/mall/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Chính Hãng
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://banhang.shopee.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Kênh Người Bán
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://shopee.vn/flash_sale/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Flash Sales
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://shopee.vn/affiliate/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Chương Trình Tiếp Thị Liên Kết Shopee
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="mailto:media.vn%40shopee.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={getLinkStyles}
                    >
                      <Typography sx={getLinkTypographyStyles}>
                        Liên Hệ Với Truyền Thông
                      </Typography>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
          {/* Grid container 2 */}
          <Grid container item xs={12} sm={4} md={2.5} spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <Typography variant="h6" sx={typographyStylesH6}>
                  THANH TOÁN
                </Typography>
                <List
                  dense
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    flexWrap: "wrap",
                  }}
                >
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Box>
                <Typography variant="h6" sx={typographyStylesH6}>
                  ĐƠN VỊ VẬN CHUYỂN
                </Typography>
                <List
                  dense
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    flexWrap: "wrap",
                  }}
                >
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                  <ListItem sx={{ flexBasis: "33.3333%", ...listItemClases }}>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={imageFooter}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd"
                        alt="logo"
                      />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
          {/* Grid container 3 */}
          <Grid container item xs={12} sm={4} md={4.5} spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h6" sx={typographyStylesH6}>
                  THEO DÕI CHÚNG TÔI TRÊN
                </Typography>
                <List>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://www.facebook.com/ShopeeVN"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ ...linkClases, ...getLinkStyles }}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                        alt="logo"
                      />
                      <Typography
                        sx={{
                          marginLeft: "8px",
                          lineHeight: "16px",
                          ...getLinkTypographyStyles,
                        }}
                      >
                        Facebook
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://instagram.com/Shopee_VN"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ ...linkClases, ...getLinkStyles }}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91"
                        alt="logo"
                      />
                      <Typography
                        sx={{
                          marginLeft: "8px",
                          lineHeight: "16px",
                          ...getLinkTypographyStyles,
                        }}
                      >
                        Instagram
                      </Typography>
                    </Link>
                  </ListItem>
                  <ListItem sx={listItemClases}>
                    <Link
                      href="https://www.linkedin.com/company/shopee"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ ...linkClases, ...getLinkStyles }}
                    >
                      <img
                        src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a"
                        alt="logo"
                      />
                      <Typography
                        sx={{
                          marginLeft: "8px",
                          lineHeight: "16px",
                          ...getLinkTypographyStyles,
                        }}
                      >
                        LinkedIn
                      </Typography>
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h6" sx={typographyStylesH6}>
                  TẢI ỨNG DỤNG SHOPEE NGAY THÔI
                </Typography>
                <List>
                  <Grid container spacing={0}>
                    {/* ListItem 1 */}
                    <Grid item xs={6}>
                      <ListItem sx={listItemClases}>
                        <Link
                          href="https://shopee.vn/web"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                            alt="logo"
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: "2px",
                              boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                              height: "88px",
                              marginRight: ".75rem",
                              padding: ".25rem",
                              width: "88px",
                            }}
                          />
                        </Link>
                      </ListItem>
                    </Grid>
                    {/* Grid container for ListItem 2, 3, 4 */}
                    <Grid item xs={6}>
                      <Grid container spacing={0}>
                        {/* ListItem 2 */}
                        <Grid item xs={12}>
                          <ListItem sx={{ padding: "0" }}>
                            <Link
                              href="https://shopee.vn/web"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={imageFooterApp}
                            >
                              <img
                                src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                                alt="logo"
                                style={{
                                  maxHeight: "100%",
                                  maxWidth: "100%",
                                }}
                              />
                            </Link>
                          </ListItem>
                        </Grid>
                        {/* ListItem 3 */}
                        <Grid item xs={12}>
                          <ListItem sx={{ padding: "0" }}>
                            <Link
                              href="https://shopee.vn/web"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={imageFooterApp}
                            >
                              <img
                                src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                                alt="logo"
                                style={{ maxHeight: "100%", maxWidth: "100%" }}
                              />
                            </Link>
                          </ListItem>
                        </Grid>
                        {/* ListItem 4 */}
                        <Grid item xs={12}>
                          <ListItem sx={{ padding: "0" }}>
                            <Link
                              href="https://shopee.vn/web"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={imageFooterApp}
                            >
                              <img
                                src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                                alt="logo"
                                style={{ maxHeight: "100%", maxWidth: "100%" }}
                              />
                            </Link>
                          </ListItem>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            borderTop: ".5px solid rgba(0, 0, 0, .1)",
            "& .css-w937ta-MuiGrid-root>.MuiGrid-item": {
              paddingTop: "none",
            },
            margin: "0",
            padding: "40px 0",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ "&.MuiGrid-root": { paddingTop: "0" } }}
          >
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"start"}
              sx={{ color: "rgba(25, 37, 55, 0.5)" }}
            >
              <Link
                href="https://beian.miit.gov.cn/"
                sx={{
                  color: "rgba(25, 37, 55, 0.5)",
                  fontSize: "14px",
                  textDecoration: "none",
                  "&:hover": { color: "#ee4d2d" },
                }}
              >
                粤ICP备17161890号
              </Link>
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  lineHeight: "1.5rem",
                }}
              >
                Copyright © 2024 深圳虾皮信息技术有限责任公司. All rights
                reserved.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ "&.MuiGrid-root": { paddingTop: "0" } }}
          >
            <Stack direction={"row"} sx={{ color: "rgba(0, 0, 0, .54)" }}>
              <Typography
                variant="body1"
                sx={{
                  marginRight: "8px",
                  fontSize: "14px",
                  lineHeight: "1.5rem",
                }}
              >
                Quốc gia &amp; Khu vực:
              </Typography>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.sg"
                  sx={getLinkCountryTypographyStyles}
                >
                  Singapore
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.co.id"
                  sx={getLinkCountryTypographyStyles}
                >
                  Indonesia
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.co.th"
                  sx={getLinkCountryTypographyStyles}
                >
                  Thái Lan
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.com.my"
                  sx={getLinkCountryTypographyStyles}
                >
                  Malaysia
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.vn"
                  sx={getLinkCountryTypographyStyles}
                >
                  Việt Nam
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.ph"
                  sx={getLinkCountryTypographyStyles}
                >
                  Philippines
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.com.br"
                  sx={getLinkCountryTypographyStyles}
                >
                  Brazil
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.com.mx"
                  sx={getLinkCountryTypographyStyles}
                >
                  México
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.com.co"
                  sx={getLinkCountryTypographyStyles}
                >
                  Colombia
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.cl"
                  sx={getLinkCountryTypographyStyles}
                >
                  Chile
                </Link>
              </Box>
              <Box sx={getLinkCountryBoxStyles}>
                <Link
                  href="https://shopee.tw"
                  sx={getLinkCountryTypographyStyles}
                >
                  Đài Loan
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            padding: "2.625rem 0 2.3125rem",
            "& .MuiGrid-root": { paddingTop: "0" },
          }}
        >
          <Grid item xs={12} sx={{ "&.MuiGrid-root": { paddingTop: "0" } }}>
            <Box>
              <Stack
                direction={"row"}
                alignContent={"center"}
                justifyContent={"center"}
                sx={{ marginBottom: "2.5rem", color: "rgba(0, 0, 0, .65)" }}
              >
                <Box sx={getPolicyBoxStyles}>
                  <Link
                    href="https://help.shopee.vn/portal/article/77244"
                    className="mG_GYE"
                    sx={getPolicyLinkStyles}
                  >
                    <Typography sx={{ fontSize: ".75rem" }}>
                      Chính sách bảo mật
                    </Typography>
                  </Link>
                </Box>
                <Box sx={getPolicyBoxStyles}>
                  <Link
                    href="https://help.shopee.vn/portal/article/77245"
                    className="mG_GYE"
                    sx={getPolicyLinkStyles}
                  >
                    <Typography sx={{ fontSize: ".75rem" }}>
                      Quy chế hoạt động
                    </Typography>
                  </Link>
                </Box>
                <Box sx={getPolicyBoxStyles}>
                  <Link
                    href="https://help.shopee.vn/portal/article/77250"
                    className="mG_GYE"
                    sx={getPolicyLinkStyles}
                  >
                    <Typography sx={{ fontSize: ".75rem" }}>
                      Chính sách vận chuyển
                    </Typography>
                  </Link>
                </Box>
                <Box sx={getPolicyBoxStyles}>
                  <Link
                    href="https://help.shopee.vn/portal/article/77251"
                    className="mG_GYE"
                    sx={getPolicyLinkStyles}
                  >
                    <Typography sx={{ fontSize: ".75rem" }}>
                      Chính sách trả hàng và hoàn tiền
                    </Typography>
                  </Link>
                </Box>
              </Stack>
              <Stack
                direction={"row"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=18375"
                >
                  <Box
                    className="footer-vn-background"
                    sx={{
                      backgroundImage: `url(${"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png"})`,
                      backgroundPosition:
                        "14.391143911439114% 99.41176470588235%",
                      backgroundSize: "551.6666666666666% 477.77777777777777%",
                      height: "2.8125rem",
                      width: "7.5rem",
                      margin: "0 1.25rem",
                    }}
                  ></Box>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=29"
                >
                  <Box
                    className="footer-vn-background"
                    sx={{
                      backgroundImage: `url(${"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png"})`,
                      backgroundPosition:
                        "14.391143911439114% 99.41176470588235%",
                      backgroundSize: "551.6666666666666% 477.77777777777777%",
                      height: "2.8125rem",
                      width: "7.5rem",
                      margin: "0 1.25rem",
                    }}
                  ></Box>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://shopee.vn/docs/170"
                >
                  <Box
                    className="footer-vn-background"
                    sx={{
                      backgroundImage: `url(${"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9765d68a8945750d.png"})`,
                      backgroundPosition:
                        "1.6286644951140066% 92.21556886227545%",
                      backgroundSize: "1379.1666666666667% 447.9166666666667%",
                      height: "3rem",
                      width: "3rem",
                      margin: "0 1.25rem",
                    }}
                  ></Box>
                </Link>
              </Stack>
              <Typography
                sx={{
                  marginBottom: "1.5625rem",
                  marginTop: ".5rem",
                  ...getParagramTypographyStyles,
                }}
              >
                Công ty TNHH Shopee
              </Typography>
              <Typography sx={getParagramTypographyStyles}>
                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu
                Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt
                Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
              </Typography>
              <Typography sx={getParagramTypographyStyles}>
                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại
                liên hệ: 024 73081221 (ext 4678)
              </Typography>
              <Typography sx={getParagramTypographyStyles}>
                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội
                cấp lần đầu ngày 10/02/2015
              </Typography>
              <Typography sx={getParagramTypographyStyles}>
                © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default RegisterFooter;
