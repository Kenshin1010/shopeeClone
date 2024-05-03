import { Box, Paper } from "@mui/material";
import BasicInformation from "./components/BasicInformation";
import ButtonGroupBottom from "./components/ButtonGroupBottom";
import NavTabPanel from "./components/NavTabPanel";

function ProductNewBodyRight() {
  const productEditSection = {
    marginTop: "16px",
  };

  const productDetailPanel = {
    overflow: "hidden",
    padding: "24px 24px 0",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0, 0, 0, .12)",
    borderRadius: "6px",
  };

  const panelTitle = {
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "22px",
    color: "#999",
  };

  const panelContentWrapper = {
    marginBottom: "24px",
  };

  const panelContentInactive = {
    color: "#999",
  };
  return (
    <div className="ProductNewBodyRight">
      <Paper sx={{ top: "72px" }}>
        <NavTabPanel />
      </Paper>
      <Paper>
        <section className="product-edit__section">
          <BasicInformation />
        </section>
      </Paper>
      <Paper>
        <section
          className="product-edit__section"
          style={{ ...productEditSection }}
        >
          <Box
            className="product-detail-panel product-sales-info inactive"
            sx={{ ...productDetailPanel }}
          >
            <Box className="panel-header" sx={{ marginBottom: "24px" }}>
              <Box className="panel-title" sx={{ ...panelTitle }}>
                Thông tin bán hàng
              </Box>
            </Box>
            <Box
              className="panel-content-wrapper"
              sx={{ ...panelContentWrapper }}
            >
              <Box
                className="panel-inactive-content"
                sx={{ ...panelContentInactive }}
              >
                Có thể điều chỉnh sau khi chọn ngành hàng
              </Box>
            </Box>
          </Box>
        </section>
      </Paper>
      <Paper>
        <section
          className="product-edit__section"
          style={{ ...productEditSection }}
        >
          <Box
            className="product-detail-panel product-sales-info inactive"
            sx={{ ...productDetailPanel }}
          >
            <Box className="panel-header" sx={{ marginBottom: "24px" }}>
              <Box className="panel-title" sx={{ ...panelTitle }}>
                Vận chuyển
              </Box>
            </Box>
            <Box
              className="panel-content-wrapper"
              sx={{ ...panelContentWrapper }}
            >
              <Box
                className="panel-inactive-content"
                sx={{ ...panelContentInactive }}
              >
                Có thể điều chỉnh sau khi chọn ngành hàng
              </Box>
            </Box>
          </Box>
        </section>
      </Paper>
      <Paper>
        <section
          className="product-edit__section"
          style={{ ...productEditSection, marginBottom: "16px" }}
        >
          <Box
            className="product-detail-panel product-sales-info inactive"
            sx={{ ...productDetailPanel }}
          >
            <Box className="panel-header" sx={{ marginBottom: "24px" }}>
              <Box className="panel-title" sx={{ ...panelTitle }}>
                Thông tin khác
              </Box>
            </Box>
            <Box
              className="panel-content-wrapper"
              sx={{ ...panelContentWrapper }}
            >
              <Box
                className="panel-inactive-content"
                sx={{ ...panelContentInactive }}
              >
                Có thể điều chỉnh sau khi chọn ngành hàng
              </Box>
            </Box>
          </Box>
        </section>
      </Paper>
      <Paper
      // sx={{ position: "fixed", bottom: "24px", right: "100px" }}
      >
        <ButtonGroupBottom />
      </Paper>
    </div>
  );
}

export default ProductNewBodyRight;
