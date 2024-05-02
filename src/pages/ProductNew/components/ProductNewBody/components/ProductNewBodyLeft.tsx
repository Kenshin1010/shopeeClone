import { Box, Link, SvgIcon, Typography } from "@mui/material";
import OptimizerCardIcon from "../jsx-icon/OptimizerCardIcon";
import EducationCardIcon from "../jsx-icon/EducationCardIcon";

function ProductNewBodyLeft() {
  return (
    <div className="ProductNewBodyLeft">
      <Box className="product-edit__side">
        <Box data-sidebar-key="optimizer" className="optimizer-card">
          <Box className="optimizer-card-suggestion-top">
            <Typography className="optimizer-card-suggestion-title">
              Gợi ý điền Thông tin
            </Typography>
          </Box>
          <Box className="optimizer-card-content">
            <Box className="optimizer-card-task-list">
              <Box className="optimizer-card-task-item">
                <SvgIcon className="shopee-icon">
                  <OptimizerCardIcon />
                </SvgIcon>
                <Typography className="item-content">
                  Thêm ít nhất 3 hình ảnh
                </Typography>
              </Box>
              <Box className="optimizer-card-task-item">
                <SvgIcon className="shopee-icon">
                  <OptimizerCardIcon />
                </SvgIcon>
                <Typography className="item-content">
                  Thêm video sản phẩm
                </Typography>
              </Box>
              <Box className="optimizer-card-task-item">
                <SvgIcon className="shopee-icon">
                  <OptimizerCardIcon />
                </SvgIcon>
                <Typography className="item-content">
                  Tên sản phẩm có ít nhất 25~100 kí tự
                </Typography>
              </Box>
              <Box className="optimizer-card-task-item">
                <SvgIcon className="shopee-icon">
                  <OptimizerCardIcon />
                </SvgIcon>
                <Typography className="item-content">
                  Thêm ít nhất 100 kí tự hoặc 1 hình ảnh trong mô tả sản phẩm
                </Typography>
              </Box>
              <Box className="optimizer-card-task-item">
                <SvgIcon className="shopee-icon">
                  <OptimizerCardIcon />
                </SvgIcon>
                <Typography className="item-content">
                  Thêm thương hiệu
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="education-card-wrapper product-education-card">
          <Box className="education-card" sx={{ maxHeight: "88px" }}>
            <Box className="education-card-top">
              <SvgIcon className="education-card-bg shopee-icon">
                <EducationCardIcon />
              </SvgIcon>
              <Typography className="education-card-tips">Gợi ý</Typography>
            </Box>
            <Typography className="education-card-title">
              Hình ảnh sản phẩm
            </Typography>
            <Box className="education-card-scroll">
              <Box className="education-card-scroll-content">
                <Box className="src-components-education---education-card-content--25sL8">
                  <Typography>
                    - Tham khảo hướng dẫn hình ảnh sản phẩm khi đăng bán
                    <Link
                      href="https://banhang.shopee.vn/edu/article/238"
                      target="_blank"
                    >
                      <strong> tại đây</strong>
                    </Link>
                  </Typography>
                  <Typography>
                    - Tham khảo hướng dẫn cho Shopee Mall<strong> </strong>
                    <Link
                      href="https://banhang.shopee.vn/edu/article/98"
                      target="_blank"
                    >
                      <strong>tại đây</strong>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProductNewBodyLeft;
