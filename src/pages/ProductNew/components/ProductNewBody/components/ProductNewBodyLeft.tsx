import {
  Box,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import EducationCardIcon from "../jsx-icon/EducationCardIcon";
import OptimizerCardIcon from "../jsx-icon/OptimizerCardIcon";

function ProductNewBodyLeft() {
  const optimizerCardTaskItem = {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifiContent: "start",
    padding: "8px 16px",
    cursor: "pointer",
  };

  const shopeeSVGIcon = {
    width: "18px",
    height: "18px",
    fill: "currentColor",
    display: "inline-block",
    lineHeight: "0",
  };

  const itemContent = {
    paddingLeft: "8px",
    fontSize: "14px",
    color: "#333",
  };
  return (
    <div className="ProductNewBodyLeft">
      <Box
        className="product-edit__side"
        sx={{
          // position: "fixed",
          minWidth: "308px",
          maxWidth: "446.5px",
          width: "calc((100vw - 2* 67px) / 24* 6)",
          paddingRight: "16px",
          top: "72px",
          verticalAlign: "baseline",
          border: "0",
          // zIndex: "10",
        }}
      >
        <Paper>
          <Stack
            direction={"column"}
            data-sidebar-key="optimizer"
            className="optimizer-card"
            sx={{
              position: "relative",
              background: "#fff",
              borderRadius: "6px",
              boxShadow: "0 1px 4px rgba(0, 0, 0, .12)",
              overflow: "hidden",
              marginBottom: "16px",
            }}
          >
            <Box
              className="optimizer-card-suggestion-top"
              sx={{
                position: "relative",
                padding: "22px 24px",
                background: "#e5eefb",
                borderRadius: "4px 4px 0 0",
                boxShadow: "inset 0 4px 0 #2673dd",
              }}
            >
              <Typography
                className="optimizer-card-suggestion-title"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "rgba(0, 0, 0, .87)",
                  textAlign: "left",
                }}
              >
                Gợi ý điền Thông tin
              </Typography>
            </Box>
            <Box className="optimizer-card-content" sx={{ padding: "16px 0" }}>
              <List
                className="optimizer-card-task-list"
                sx={{
                  padding: "0",
                  margin: "0",
                  font: "inherit",
                  verticalAlign: "baseline",
                  border: "0",
                }}
              >
                <ListItem
                  className="optimizer-card-task-item"
                  sx={{ ...optimizerCardTaskItem }}
                >
                  <SvgIcon className="shopee-icon" sx={{ ...shopeeSVGIcon }}>
                    <OptimizerCardIcon />
                  </SvgIcon>
                  <Typography className="item-content" sx={{ ...itemContent }}>
                    Thêm ít nhất 3 hình ảnh
                  </Typography>
                </ListItem>
                <ListItem
                  className="optimizer-card-task-item"
                  sx={{ ...optimizerCardTaskItem }}
                >
                  <SvgIcon className="shopee-icon" sx={{ ...shopeeSVGIcon }}>
                    <OptimizerCardIcon />
                  </SvgIcon>
                  <Typography className="item-content" sx={{ ...itemContent }}>
                    Thêm video sản phẩm
                  </Typography>
                </ListItem>
                <ListItem
                  className="optimizer-card-task-item"
                  sx={{ ...optimizerCardTaskItem }}
                >
                  <SvgIcon className="shopee-icon" sx={{ ...shopeeSVGIcon }}>
                    <OptimizerCardIcon />
                  </SvgIcon>
                  <Typography className="item-content" sx={{ ...itemContent }}>
                    Tên sản phẩm có ít nhất 25~100 kí tự
                  </Typography>
                </ListItem>
                <ListItem
                  className="optimizer-card-task-item"
                  sx={{ ...optimizerCardTaskItem }}
                >
                  <SvgIcon className="shopee-icon" sx={{ ...shopeeSVGIcon }}>
                    <OptimizerCardIcon />
                  </SvgIcon>
                  <Typography className="item-content" sx={{ ...itemContent }}>
                    Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm
                  </Typography>
                </ListItem>
                <ListItem
                  className="optimizer-card-task-item"
                  sx={{ ...optimizerCardTaskItem }}
                >
                  <SvgIcon className="shopee-icon" sx={{ ...shopeeSVGIcon }}>
                    <OptimizerCardIcon />
                  </SvgIcon>
                  <Typography className="item-content" sx={{ ...itemContent }}>
                    Thêm thương hiệu
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Paper>
        <Paper>
          <Stack
            className="education-card-wrapper product-education-card"
            sx={{
              padding: "0",
              margin: "0",
              font: "inherit",
              verticalAlign: "baseline",
              border: "0",
              textAlign: "left",
            }}
          >
            <Stack
              direction={"column"}
              className="education-card"
              sx={{
                // maxHeight: "88px",
                position: "relative",
                minHeight: "50px",
                color: "#333",
                background: "#fff",
                borderRadius: "6px",
                filter:
                  "drop-shadow(0 0 16px rgba(0, 0, 0, .08)) drop-shadow(0 8px 16px rgba(0, 0, 0, .04))",
              }}
            >
              <Box
                className="education-card-top"
                sx={{
                  position: "relative",
                }}
              >
                <SvgIcon
                  className="education-card-bg shopee-icon"
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "24px",
                    width: "34px",
                    height: "53px",
                    fill: "#2673dd",
                    opacity: ".2",
                    transform: "rotate(60deg)",
                  }}
                >
                  <EducationCardIcon />
                </SvgIcon>
                <Typography
                  className="education-card-tips"
                  sx={{
                    color: "#2673dd",
                    padding: "16px",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Gợi ý
                </Typography>
              </Box>
              <Typography
                className="education-card-title"
                sx={{
                  padding: "0 16px",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "20px",
                  marginBottom: "8px",
                }}
              >
                Mô tả sản phẩm
              </Typography>
              <Stack
                direction={"column"}
                className="education-card-scroll"
                sx={{
                  flex: "1",
                  paddingRight: "4px",
                  overflow: "hidden",
                }}
              >
                <Box
                  className="education-card-scroll-content"
                  sx={{
                    flex: "1",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    borderRadius: "0 0 4px 4px",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "14px",
                      lineHeight: "18px",
                      padding: "6px 16px 16px",
                      overflowWrap: "break-word",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      color: "#666",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      <strong>Lưu ý:</strong> Đối với một số mặt hàng nhất định,
                      Người bán cần cung cấp các thông tin sau tại mục "Mô tả
                      sản phẩm" theo quy định của Nghị định 85/2021/NĐ-CP (Xem
                      Hướng dẫn chi tiết "
                      <Link
                        href="https://deo.shopeemobile.com/shopee/cms_cdn_bucket/ef7e580d40244288a5a396a54e59cf29_H%C6%B0%E1%BB%9Bng%20d%E1%BA%ABn%20thu%E1%BB%99c%20t%C3%ADnh%20m%E1%BB%9Bi.pdf"
                        target="_blank"
                        sx={{ textDecoration: "none" }}
                      >
                        <strong>tại đây</strong>
                      </Link>
                      ")
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      - Số chứng nhận phê duyệt kiểu
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      - Khuyến cáo
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      - Hướng dẫn sử dụng
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      - Thông số kỹ thuật
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      - Thông tin cảnh báo
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}

export default ProductNewBodyLeft;
