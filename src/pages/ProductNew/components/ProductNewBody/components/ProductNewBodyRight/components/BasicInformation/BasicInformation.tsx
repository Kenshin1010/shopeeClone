import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  List,
  ListItem,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ShopeeImageUploadIcon from "./jsx-icon/ShopeeImageUploadIcon";

function BasicInformation() {
  const productEditSection = {
    marginTop: "0",
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
    color: "#333",
  };

  const panelContentWrapper = {
    marginBottom: "24px",
  };

  const editRow = {
    marginBottom: "24px",
    flexWrap: "wrap",
  };

  const editLabel = {
    position: "relative",
    minHeight: "40px",
    textAlign: "right",
    color: "#333",
  };

  const editTitle = {
    flexBasis: "144px",
    width: "144px",
    maxWidth: "144px",
    marginRight: "16px",
    fontSize: "14px",
    textAlign: "right",
  };

  const mandatory = {
    color: "#ee4d2d",
    display: "inline-block",
    fontSize: "14px",
  };

  const mandatoryIcon = {
    marginRight: "3px",
    verticalAlign: "middle",
  };

  const editMain = {
    flex: "1",
    maxWidth: "calc(100% - 144px - 16px)",
  };

  const popoverWrap = {
    width: "100%",
    height: "100%",
  };

  const productEditFormItemContent = {
    position: "relative",
    lineHeight: "22px",
  };

  const radioWrapper = {
    width: "auto",
    marginTop: "-4px",
  };

  const shopeeRadioGroup = {
    // display: "inline-block",
    fontSize: "0",
    marginRight: "24px",
  };

  const shopeeRadio = {
    color: "#333",
    cursor: "pointer",
    // display: "inline-block",
    fontSize: "0",
    userSelect: "none",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  const shopeeRadioIndicator = {
    backgroundColor: "#ee4d2d",
    borderColor: "#ee4d2d",
    border: "1px solid #e5e5e5",
    borderRadius: "50%",
    boxSizing: "border-box",
    display: "inline-block",
    height: "16px",
    marginRight: "8px",
    position: "relative",
    transition: "border-color .2s ease-in-out",
    verticalAlign: "middle",
    width: "16px",
    "&:before": {
      transform: "scale(1)",
      backgroundColor: "#fff",
      borderRadius: "50%",
      content: "''",
      height: "6px",
      left: "4px",
      position: "absolute",
      top: "4px",
      // transform: "scale(0)",
      transition: "transform .2s",
      width: "6px",
    },
  };

  const shopeeRadioLabel = {
    display: "inline-block",
    fontSize: "14px",
    verticalAlign: "middle",
  };

  const promotionRemarkContentListItem = {
    listStyleType: "disc",
    "&:marker": {
      unicodeBidi: "isolate",
      fontVariantNumeric: "tabular-nums",
      textTransform: "none",
      textIndent: "0px !important",
      textAlign: "start !important",
      textAlignLast: "start !important",
    },
  };

  const shopeePopper = {
    backgroundColor: "#000",
    color: "#fff",
    opacity: ".8",
  };

  const shopeePopperPopper = {
    wordWrap: "break-word",
    border: "1px solid transparent",
    borderRadius: "3px",
    boxShadow: "0 0 16px 0 rgba(0, 0, 0, .1), 0 8px 16px 0 rgba(0, 0, 0, .06)",
    fontSize: "14px",
    lineHeight: "18px",
    minWidth: "80px",
    zIndex: "1",
  };

  const shopeePopperContent = {
    backgroundColor: "inherit",
    borderRadius: "4px",
    // padding: "12px 16px",
    padding: "4px 8px",
  };

  const shopeeButton = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    appearance: "none",
    minWidth: "72px",
    height: "32px",
    padding: "0 16px",
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
    boxSizing: "border-box",
    color: "#333",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: "500",
    outline: "none",
    textDecoration: "none",
    transition: "all .2s ease-in-out",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  };

  const shopeeButtonLink = {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "#2673dd",
    fontWeight: "400",
    height: "unset",
    minWidth: "unset",
    padding: "0",
    textTransform: "none",
    "&:hover": {
      color: "#0046ab",
      backgroundColor: "transparent",
    },
  };

  const shopeeImageManager = {
    display: "inline-block",
    width: "auto !important",
    position: "relative",
    color: "#1791f2",
  };

  const container = {
    display: "flex",
    flexWrap: "wrap",
  };

  const shopeeImageManagerItembox = {
    flex: "0 0 80px",
    margin: "0 16px 16px 0",
    borderRadius: "4px",
  };

  const shopeeImageManagerContent = {
    cursor: "move",
    position: "relative",
    height: "100%",
    paddingTop: "100%",
    borderRadius: "2px",
  };

  const shopeeImageManagerUpload = {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "2",
    cursor: "pointer",
    border: "1px dashed #d8d8d8",
    borderRadius: "4px",
    transition: "color .25s ease, border-color .25s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const shopeeFileUpload = {
    width: "100%",
    height: "100%",
    border: "1px solid transparent",
  };

  const shopeeUpload = {
    height: "100%",
  };

  const shopeeUploadWrapper = {
    padding: "0",
    border: "0",
    background: "#fff",
    cursor: "pointer",
    display: "inline-block",
    outline: "none",
    textAlign: "center",
  };

  const shopeeUploadDragger = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    border: "none",
    background: "#fafafa",
    // border: "1px dashed #d8d8d8",
    borderRadius: "4px",
    overflow: "hidden",
    // padding: "32px",
    position: "relative",
    transition: "border-color .2s ease-in-out",
  };

  const shopeeUploadInput = {
    display: "none",
  };

  const shopeeImageManagerUploadContent = {
    color: "#ee4d2d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: "0 2px",
  };

  const shopeeImageManagerUploadContentIcon = {
    height: "23px",
  };

  const shopeeIcon = {
    width: "23px",
    height: "23px",
    // width: "40px",
    // height: "40px",
    fill: "currentColor",
    display: "inline-block",
    lineHeight: "0",
  };

  const shopeeImageManagerUploadContentText = {
    lineHeight: "14px",
    fontSize: "12px",
  };

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    Promise.all(
      files.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (e) => resolve(e.target?.result as string);
          reader.onerror = (e) => reject(e);

          reader.readAsDataURL(file);
        });
      })
    ).then((imageDataUrls) => {
      setImagePreviews(imageDataUrls as []);
    });
  };

  return (
    <div className="BasicInformation" style={{ ...productEditSection }}>
      <Box
        className="product-detail-panel product-basic-info"
        sx={{ ...productDetailPanel }}
      >
        <Box className="panel-header" sx={{ marginBottom: "24px" }}>
          <Box className="panel-title">
            <Box className="basic-info-title" sx={{ ...panelTitle }}>
              Thông tin cơ bản
            </Box>
          </Box>
        </Box>
        <Box className="panel-content-wrapper" sx={{ ...panelContentWrapper }}>
          <Box className="panel-content">
            <Box className="container">
              {/* <FormProductImages /> */}
              <Stack
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                className="product-image-manager edit-row"
                sx={{ ...editRow }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"start"}
                  justifyContent={"flex-end"}
                  className="edit-row image-offset"
                  sx={{ ...editRow }}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"start"}
                    justifyContent={"flex-end"}
                    className="edit-label edit-title"
                    sx={{ ...editLabel, ...editTitle }}
                  >
                    <Box className="mandatory" sx={{ ...mandatory }}>
                      <Typography
                        className="mandatory-icon"
                        sx={{ ...mandatoryIcon }}
                      >
                        *
                      </Typography>
                    </Box>
                    <Typography sx={{ ...editTitle, marginRight: "0" }}>
                      Hình ảnh sản phẩm
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"column"}
                    alignItems={"start"}
                    justifyContent={"flex-start"}
                    className="edit-main"
                    data-product-edit-field-unique-id="images"
                    sx={{ ...editMain }}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                      data-auto-correct-key="images"
                      sx={{ lineHeight: "40px", display: "flex" }}
                    >
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        className="popover-wrap radio-wrapper"
                        sx={{ ...popoverWrap, ...radioWrapper }}
                      >
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"flex-start"}
                          className="shopee-tooltip shopee-popover shopee-popover--dark"
                          sx={{ ...popoverWrap }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            className="shopee-popover__ref"
                            sx={{ ...popoverWrap }}
                          >
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyItems={"flex-start"}
                              className="shopee-radio-group shopee-radio-group--normal shopee-radio-group--solid"
                              sx={{ ...shopeeRadioGroup }}
                            >
                              <FormLabel
                                className="shopee-radio"
                                sx={{ ...shopeeRadio }}
                              >
                                <Input
                                  type="radio"
                                  className="shopee-radio__input"
                                  value="1"
                                  sx={{
                                    ...shopeeRadio,
                                    "&:before, &:after, &:hover": {
                                      border: "none",
                                    },
                                    "&.MuiInputBase-input": {
                                      border: "none",
                                    },
                                  }}
                                />
                                <Typography
                                  className="shopee-radio__indicator"
                                  sx={{ ...shopeeRadioIndicator }}
                                ></Typography>
                                <Typography
                                  className="shopee-radio__label"
                                  sx={{ ...shopeeRadioLabel }}
                                >
                                  Hình ảnh tỷ lệ 1:1
                                </Typography>
                              </FormLabel>
                              <FormLabel
                                className="shopee-radio"
                                sx={{ ...shopeeRadio }}
                              >
                                <Input
                                  type="radio"
                                  className="shopee-radio__input"
                                  value="2"
                                  sx={{
                                    ...shopeeRadio,
                                    "&:before, &:after, &:hover": {
                                      border: "none",
                                    },
                                    "&.MuiInputBase-input": {
                                      border: "none",
                                    },
                                  }}
                                />
                                <Typography
                                  className="shopee-radio__indicator"
                                  sx={{ ...shopeeRadioIndicator }}
                                ></Typography>
                                <Typography
                                  className="shopee-radio__label"
                                  sx={{ ...shopeeRadioLabel }}
                                >
                                  Hình ảnh tỷ lệ 3:4
                                </Typography>
                              </FormLabel>
                            </Stack>
                          </Stack>
                          <Box
                            className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                            sx={{
                              display: "none",
                              maxWidth: "280px",
                              ...shopeePopper,
                              ...shopeePopperPopper,
                            }}
                          >
                            <Box
                              className="shopee-popover__content"
                              sx={shopeePopperContent}
                            >
                              Không thể thay đổi trong quá trình xử lý hình ảnh
                            </Box>
                          </Box>
                        </Stack>
                      </Stack>
                      <Button
                        type="button"
                        className="shopee-button shopee-button--link shopee-button--normal"
                        sx={{
                          marginLeft: "16px",
                          "&:before": {
                            borderRadius: "inherit",
                            bottom: "-1px",
                            content: "''",
                            left: "-1px",
                            position: "absolute",
                            right: "-1px",
                            top: "-1px",
                          },
                          ...shopeeButton,
                          ...shopeeButtonLink,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            lineHeight: "1",
                            verticalAlign: "middle",
                          }}
                        >
                          {" "}
                          View Example{" "}
                        </Typography>
                      </Button>
                    </Stack>
                    <Box
                      className="image-manager-wrapper"
                      // useMms={"true"}
                      // imagesInfo=""
                      // maxUploadFileNum="9"
                      // minUploadFileNum="1"
                      // imageMinSize="1,1"
                      // productId="0"
                      // maxFileSize="2097152"
                      // allowedFileExtensions="jpg,jpeg,png"
                      // allowedMimeTypes="image/jpg,image/jpeg,image/png"
                    >
                      <Box
                        className="shopee-image-manager"
                        sx={{ ...shopeeImageManager }}
                      >
                        <Container
                          className="container"
                          sx={{
                            ...container,
                            "&.MuiContainer-root": {
                              padding: "0",
                            },
                          }}
                        >
                          <Box
                            className="shopee-image-manager__itembox"
                            sx={{
                              width: "80px",
                              maxWidth: "80px",
                              height: "80px",
                              maxHeight: "80px",
                              ...shopeeImageManagerItembox,
                            }}
                          >
                            <Box
                              className="shopee-image-manager__content"
                              sx={{ ...shopeeImageManagerContent }}
                            >
                              <Box
                                className="shopee-image-manager__upload"
                                sx={{ ...shopeeImageManagerUpload }}
                              >
                                <Box
                                  className="shopee-file-upload"
                                  // accept="image/*"
                                  sx={{ ...shopeeFileUpload }}
                                >
                                  <Box
                                    className="shopee-upload"
                                    // aspect="1"
                                    sx={{ ...shopeeUpload }}
                                  >
                                    <Box
                                      className="shopee-upload-wrapper shopee-upload-dragger"
                                      sx={{
                                        ...shopeeUploadWrapper,
                                        ...shopeeUploadDragger,
                                      }}
                                    >
                                      <input
                                        type="file"
                                        name="file"
                                        accept="image/*"
                                        multiple
                                        // aspect="1"
                                        className="shopee-upload__input"
                                        onChange={handleFileChange}
                                        style={shopeeUploadInput}
                                      />
                                      <div>
                                        {imagePreviews.map(
                                          (imagePreview, index) => (
                                            <img
                                              key={index}
                                              src={imagePreview}
                                              alt={`Image preview ${index}`}
                                            />
                                          )
                                        )}
                                      </div>
                                      <Box
                                        className="shopee-image-manager__upload__content"
                                        sx={shopeeImageManagerUploadContent}
                                      >
                                        <Box
                                          className="shopee-image-manager__upload__content__icon"
                                          sx={
                                            shopeeImageManagerUploadContentIcon
                                          }
                                        >
                                          <SvgIcon
                                            className="shopee-icon"
                                            sx={shopeeIcon}
                                          >
                                            <ShopeeImageUploadIcon />
                                          </SvgIcon>
                                        </Box>
                                        <Box
                                          className="shopee-image-manager__upload__content__text"
                                          sx={
                                            shopeeImageManagerUploadContentText
                                          }
                                        >
                                          Thêm hình ảnh (0/9)
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Container>
                        <Box
                          className="shopee-modal image-cropper-modal"
                          // close-inside=""
                        >
                          <Box
                            className="shopee-modal__mask"
                            sx={{ display: "none", zIndex: "1000002" }}
                          >
                            <Box className="shopee-modal__container">
                              <Box
                                className="shopee-modal__box"
                                sx={{ display: "none" }}
                              >
                                <Box className="shopee-modal__content shopee-modal__content--normal">
                                  <Box className="shopee-modal__header">
                                    <Box className="image-cropper-header">
                                      Chỉnh sửa hình ảnh sản phẩm
                                    </Box>
                                  </Box>
                                  <Box
                                    className="shopee-modal__body"
                                    sx={{ position: "relative" }}
                                  >
                                    <Box className="image-cropper-content">
                                      <Box className="panel-left">
                                        <Box
                                          className="image-container"
                                          sx={{
                                            width: "400px",
                                            height: "400px",
                                          }}
                                        >
                                          <img alt="" className="image" />
                                        </Box>
                                        <Box className="actions-bar">
                                          <Box className="actions-left">
                                            <Box className="zoom">
                                              <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                                <Box className="shopee-popover__ref">
                                                  <Box className="icon disabled">
                                                    <SvgIcon className="icon-zoom shopee-icon">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z"></path>
                                                      </svg>
                                                    </SvgIcon>
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                  sx={{
                                                    display: "none",
                                                    maxWidth: "280px",
                                                  }}
                                                >
                                                  <Box className="shopee-popover__content">
                                                    Thu nhỏ
                                                  </Box>
                                                </Box>
                                              </Box>
                                              <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                                <Box className="shopee-popover__ref">
                                                  <Box className="icon">
                                                    <SvgIcon className="icon-zoom shopee-icon">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z"></path>
                                                      </svg>
                                                    </SvgIcon>
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                  sx={{
                                                    display: "none",
                                                    maxWidth: "280px",
                                                  }}
                                                >
                                                  <Box className="shopee-popover__content">
                                                    Phóng to
                                                  </Box>
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                              <Box className="shopee-popover__ref">
                                                <Box className="icon">
                                                  <SvgIcon className="icon-others shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 15 17"
                                                    >
                                                      <path
                                                        fill-rule="nonzero"
                                                        d="M5 7h8a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm0 1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1H5zm3.127-5.52l-.715-.652a.5.5 0 01.674-.739l1.666 1.52a.5.5 0 01-.015.752l-1.666 1.4a.5.5 0 11-.644-.765l.616-.517c-3.988-.047-6.21 1.48-6.828 4.618a.5.5 0 01-.981-.194C.957 4.231 3.643 2.411 8.127 2.48z"
                                                      ></path>
                                                    </svg>
                                                  </SvgIcon>
                                                </Box>
                                              </Box>
                                              <Box
                                                className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                sx={{
                                                  display: "none",
                                                  maxWidth: "280px",
                                                }}
                                              >
                                                <Box className="shopee-popover__content">
                                                  Xoay phải 90°
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                              <Box className="shopee-popover__ref">
                                                <Box className="icon">
                                                  <SvgIcon className="icon-others shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 14"
                                                    >
                                                      <path
                                                        d="M9.379.758l6.476 12.953a.2.2 0 01-.179.289H9V.847a.2.2 0 01.379-.09zm-2.758 0A.2.2 0 017 .848V14H.324a.2.2 0 01-.18-.29L6.622.759zM6 4.236L1.618 13H6V4.236z"
                                                        fill-rule="evenodd"
                                                      ></path>
                                                    </svg>
                                                  </SvgIcon>
                                                </Box>
                                              </Box>
                                              <Box
                                                className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                sx={{
                                                  display: "none",
                                                  maxWidth: "280px",
                                                }}
                                              >
                                                <Box className="shopee-popover__content">
                                                  Lật ngược ảnh theo chiều ngang
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                              <Box className="shopee-popover__ref">
                                                <Box className="icon">
                                                  <SvgIcon className="icon-others shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 14 16"
                                                    >
                                                      <path
                                                        d="M13.242 9.379L.29 15.855A.2.2 0 010 15.676V9h13.153a.2.2 0 01.09.379zm0-2.758a.2.2 0 01-.09.379H0V.324a.2.2 0 01.29-.18l12.952 6.477zM9.764 6L1 1.618V6h8.764z"
                                                        fill-rule="evenodd"
                                                      ></path>
                                                    </svg>
                                                  </SvgIcon>
                                                </Box>
                                              </Box>
                                              <Box
                                                className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                sx={{
                                                  display: "none",
                                                  maxWidth: "280px",
                                                }}
                                              >
                                                <Box className="shopee-popover__content">
                                                  Lật ngược ảnh theo chiều dọc
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                          <Box className="actions-right">
                                            <Button
                                              type="button"
                                              className="shopee-button shopee-button--small"
                                            >
                                              <Typography>
                                                {" "}
                                                Nhập Lại{" "}
                                              </Typography>
                                            </Button>
                                          </Box>
                                        </Box>
                                        <Box className="mask">
                                          <Box className="mask-loading">
                                            <img
                                              src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/product/image/spinner-balls-g.cb8f25d.gif"
                                              alt="loading"
                                            />
                                          </Box>
                                        </Box>
                                      </Box>
                                      <Box className="panel-right">
                                        <Box className="label label-preview">
                                          Xem trước
                                        </Box>
                                        <Box
                                          className="preview-image-container"
                                          sx={{
                                            width: "120px",
                                            height: "120px",
                                          }}
                                        >
                                          `{" "}
                                          <Box className="preview-image">
                                            {/* {imagePreviews.map(
                                              (imagePreview, index) => (
                                                <img
                                                  key={index}
                                                  src={imagePreview}
                                                  alt={`Image preview ${index}`}
                                                />
                                              )
                                            )} */}
                                          </Box>
                                          `
                                        </Box>
                                      </Box>
                                    </Box>
                                    <Box className="resize-triggers">
                                      <Box className="expand-trigger">
                                        <Box
                                          sx={{ width: "1px", height: "1px" }}
                                        ></Box>
                                      </Box>
                                      <Box className="contract-trigger"></Box>
                                    </Box>
                                  </Box>
                                  <Box className="shopee-modal__footer">
                                    <Box className="shopee-modal__footer-buttons">
                                      <Button
                                        type="button"
                                        className="shopee-button shopee-button--normal"
                                      >
                                        <Typography>Đóng</Typography>
                                      </Button>
                                      <Button
                                        type="button"
                                        // disabled="disabled"
                                        className="shopee-button shopee-button--primary shopee-button--normal disabled"
                                      >
                                        <Typography>Lưu</Typography>
                                      </Button>
                                    </Box>
                                  </Box>
                                </Box>
                                <SvgIcon className="shopee-icon shopee-modal__close">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M2.85355339,1.98959236 L8.157,7.29314575 L13.4601551,1.98959236 C13.6337215,1.81602601 13.9031459,1.79674086 14.098014,1.93173691 L14.1672619,1.98959236 C14.362524,2.18485451 14.362524,2.501437 14.1672619,2.69669914 L14.1672619,2.69669914 L8.864,8.00014575 L14.1672619,13.3033009 C14.362524,13.498563 14.362524,13.8151455 14.1672619,14.0104076 C13.9719997,14.2056698 13.6554173,14.2056698 13.4601551,14.0104076 L8.157,8.70714575 L2.85355339,14.0104076 C2.67998704,14.183974 2.41056264,14.2032591 2.2156945,14.0682631 L2.14644661,14.0104076 C1.95118446,13.8151455 1.95118446,13.498563 2.14644661,13.3033009 L2.14644661,13.3033009 L7.45,8.00014575 L2.14644661,2.69669914 C1.95118446,2.501437 1.95118446,2.18485451 2.14644661,1.98959236 C2.34170876,1.79433021 2.65829124,1.79433021 2.85355339,1.98959236 Z"
                                    ></path>
                                  </svg>
                                </SvgIcon>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                  sx={{
                    ...editRow,
                  }}
                  className="edit-row image-offset"
                >
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    justifyContent={"flex-end"}
                    className="edit-label edit-title"
                    sx={{ ...editLabel, ...editTitle }}
                  >
                    <Box className="mandatory" sx={{ ...mandatory }}>
                      <Typography
                        className="mandatory-icon"
                        sx={{ ...mandatoryIcon }}
                      >
                        *
                      </Typography>
                    </Box>
                    <Typography sx={{ ...editTitle, marginRight: "0" }}>
                      Ảnh bìa
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    justifyContent={"flex-start"}
                    className="edit-main"
                    sx={{ ...editMain }}
                  >
                    <Box
                      className="image-manager-wrapper"
                      // use-mms="true"
                      // images-info=""
                      // max-upload-file-num="1"
                      // min-upload-file-num="1"
                      // image-min-size="1,1"
                      // image-lock="true"
                      // product-id="0"
                      // max-file-size="2097152"
                      // data-product-edit-field-unique-id="images"
                      // allowed-file-extensions="jpg,jpeg,png"
                      // allowed-mime-types="image/jpg,image/jpeg,image/png"
                    >
                      <Box className="shopee-image-manager image-lock" sx={{}}>
                        <Box
                          // draggable="true"
                          // options="[object Object]"
                          // move="function () { [native code] }"
                          className="container"
                        >
                          <Box
                            className="shopee-image-manager__itembox"
                            sx={{
                              width: "80px",
                              maxWidth: "80px",
                              height: "80px",
                              maxHeight: "80px",
                              display: "none",
                            }}
                          >
                            <Box className="shopee-image-manager__content">
                              <Box className="shopee-image-manager__upload">
                                <Box
                                  className="shopee-file-upload"
                                  // accept="image/*"
                                >
                                  <Box
                                    className="shopee-upload"
                                    // aspect="1"
                                  >
                                    <Box className="shopee-upload-wrapper shopee-upload-dragger">
                                      <Input
                                        type="file"
                                        name="file"
                                        //   accept="image/*"
                                        //   aspect="1"
                                        className="shopee-upload__input"
                                      />
                                      <Box className="shopee-image-manager__upload__content">
                                        <Box className="shopee-image-manager__upload__content__icon">
                                          <SvgIcon className="shopee-icon">
                                            <svg
                                              viewBox="0 0 23 21"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M18.5 0A1.5 1.5 0 0120 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 01.958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 01.96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0014.053 18H2a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 012 0h16.5z"></path>
                                              <path d="M6.5 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM18.5 14.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V18h-2.25a.75.75 0 010-1.5h2.25v-2.25z"></path>
                                            </svg>
                                          </SvgIcon>
                                        </Box>
                                        <Box className="shopee-image-manager__upload__content__text">
                                          Thêm hình ảnh (0/1)
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box className="image-item-custom">
                            <SvgIcon className="shopee-icon">
                              <svg
                                viewBox="0 0 23 21"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5Z"></path>
                                <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25Z"></path>
                              </svg>
                            </SvgIcon>
                            <Box className="image-item-custom-text">(0/1)</Box>
                          </Box>
                        </Box>
                        <Box
                          className="shopee-modal image-cropper-modal"
                          close-inside=""
                        >
                          <Box
                            className="shopee-modal__mask"
                            sx={{ display: "none", zIndex: "1000003" }}
                          >
                            <Box className="shopee-modal__container">
                              <Box
                                className="shopee-modal__box"
                                sx={{ display: "none" }}
                              >
                                <Box className="shopee-modal__content shopee-modal__content--normal">
                                  <Box className="shopee-modal__header">
                                    <Box className="image-cropper-header">
                                      Chỉnh sửa hình ảnh sản phẩm
                                    </Box>
                                  </Box>
                                  <Box
                                    className="shopee-modal__body"
                                    sx={{ position: "relative" }}
                                  >
                                    <Box className="image-cropper-content">
                                      <Box className="panel-left">
                                        <Box
                                          className="image-container"
                                          sx={{
                                            width: "400px",
                                            height: "400px",
                                          }}
                                        >
                                          <img alt="" className="image" />
                                        </Box>
                                        <Box className="actions-bar">
                                          <Box className="actions-left">
                                            <Box className="zoom">
                                              <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                                <Box className="shopee-popover__ref">
                                                  <Box className="icon disabled">
                                                    <SvgIcon className="icon-zoom shopee-icon">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM5.064 7.315h5.627a.563.563 0 010 1.125H5.064a.563.563 0 110-1.125z"></path>
                                                      </svg>
                                                    </SvgIcon>
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                  sx={{
                                                    display: "none",
                                                    maxWidth: "280px",
                                                  }}
                                                >
                                                  <Box className="shopee-popover__content">
                                                    Thu nhỏ
                                                  </Box>
                                                </Box>
                                              </Box>
                                              <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                                <Box className="shopee-popover__ref">
                                                  <Box className="icon">
                                                    <SvgIcon className="icon-zoom shopee-icon">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                      >
                                                        <path d="M2.307 13.448a7.878 7.878 0 1111.525-.412l2.003 2.003a.563.563 0 11-.796.796l-2.003-2.003a7.878 7.878 0 01-10.729-.384zm10.675-1.15a6.753 6.753 0 10-.684.684l.366-.318.318-.366zM7.315 7.315v-2.25a.563.563 0 011.125 0v2.25h2.251a.563.563 0 010 1.125h-2.25v2.251a.563.563 0 01-1.126 0v-2.25h-2.25a.563.563 0 110-1.126h2.25z"></path>
                                                      </svg>
                                                    </SvgIcon>
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                  sx={{
                                                    display: "none",
                                                    maxWidth: "280px",
                                                  }}
                                                >
                                                  <Box className="shopee-popover__content">
                                                    Phóng to
                                                  </Box>
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                              <Box className="shopee-popover__ref">
                                                <Box className="icon">
                                                  <SvgIcon className="icon-others shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 15 17"
                                                    >
                                                      <path
                                                        fill-rule="nonzero"
                                                        d="M5 7h8a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2zm0 1a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1H5zm3.127-5.52l-.715-.652a.5.5 0 01.674-.739l1.666 1.52a.5.5 0 01-.015.752l-1.666 1.4a.5.5 0 11-.644-.765l.616-.517c-3.988-.047-6.21 1.48-6.828 4.618a.5.5 0 01-.981-.194C.957 4.231 3.643 2.411 8.127 2.48z"
                                                      ></path>
                                                    </svg>
                                                  </SvgIcon>
                                                </Box>
                                              </Box>
                                              <Box
                                                className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                sx={{
                                                  display: "none",
                                                  maxWidth: "280px",
                                                }}
                                              >
                                                <Box className="shopee-popover__content">
                                                  Xoay phải 90°
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                              <Box className="shopee-popover__ref">
                                                <Box className="icon">
                                                  <SvgIcon className="icon-others shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 16 14"
                                                    >
                                                      <path
                                                        d="M9.379.758l6.476 12.953a.2.2 0 01-.179.289H9V.847a.2.2 0 01.379-.09zm-2.758 0A.2.2 0 017 .848V14H.324a.2.2 0 01-.18-.29L6.622.759zM6 4.236L1.618 13H6V4.236z"
                                                        fill-rule="evenodd"
                                                      ></path>
                                                    </svg>
                                                  </SvgIcon>
                                                </Box>
                                              </Box>
                                              <Box
                                                className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                sx={{
                                                  display: "none",
                                                  maxWidth: "280px",
                                                }}
                                              >
                                                <Box className="shopee-popover__content">
                                                  Lật ngược ảnh theo chiều ngang
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box className="shopee-tooltip tooltip shopee-popover shopee-popover--dark">
                                              <Box className="shopee-popover__ref">
                                                <Box className="icon">
                                                  <SvgIcon className="icon-others shopee-icon">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 14 16"
                                                    >
                                                      <path
                                                        d="M13.242 9.379L.29 15.855A.2.2 0 010 15.676V9h13.153a.2.2 0 01.09.379zm0-2.758a.2.2 0 01-.09.379H0V.324a.2.2 0 01.29-.18l12.952 6.477zM9.764 6L1 1.618V6h8.764z"
                                                        fill-rule="evenodd"
                                                      ></path>
                                                    </svg>
                                                  </SvgIcon>
                                                </Box>
                                              </Box>
                                              <Box
                                                className="shopee-popper shopee-popover__popper shopee-popover__popper--dark shopee-tooltip__popper"
                                                sx={{
                                                  display: "none",
                                                  maxWidth: "280px",
                                                }}
                                              >
                                                <Box className="shopee-popover__content">
                                                  Lật ngược ảnh theo chiều dọc
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                          <Box className="actions-right">
                                            <Button
                                              type="button"
                                              className="shopee-button shopee-button--small"
                                            >
                                              <Typography>
                                                {" "}
                                                Nhập Lại{" "}
                                              </Typography>
                                            </Button>
                                          </Box>
                                        </Box>
                                        <Box className="mask">
                                          <Box className="mask-loading">
                                            <img
                                              src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/mmf_portal_seller_root_dir/static/modules/product/image/spinner-balls-g.cb8f25d.gif"
                                              alt="loading"
                                            />
                                          </Box>
                                        </Box>
                                      </Box>
                                      <Box className="panel-right">
                                        <Box className="label label-preview">
                                          Xem trước
                                        </Box>
                                        <Box
                                          className="preview-image-container"
                                          sx={{
                                            width: "120px",
                                            height: "120px",
                                          }}
                                        >
                                          <Box className="preview-image"></Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                    <Box className="resize-triggers">
                                      <Box className="expand-trigger">
                                        <Box
                                          sx={{ width: "1px", height: "1px" }}
                                        ></Box>
                                      </Box>
                                      <Box className="contract-trigger"></Box>
                                    </Box>
                                  </Box>
                                  <Box className="shopee-modal__footer">
                                    <Box className="shopee-modal__footer-buttons">
                                      <Button
                                        type="button"
                                        className="shopee-button shopee-button--normal"
                                      >
                                        <Typography>Đóng</Typography>
                                      </Button>
                                      <Button
                                        type="button"
                                        //   disabled="disabled"
                                        className="shopee-button shopee-button--primary shopee-button--normal disabled"
                                      >
                                        <Typography>Lưu</Typography>
                                      </Button>
                                    </Box>
                                  </Box>
                                </Box>
                                <SvgIcon className="shopee-icon shopee-modal__close">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M2.85355339,1.98959236 L8.157,7.29314575 L13.4601551,1.98959236 C13.6337215,1.81602601 13.9031459,1.79674086 14.098014,1.93173691 L14.1672619,1.98959236 C14.362524,2.18485451 14.362524,2.501437 14.1672619,2.69669914 L14.1672619,2.69669914 L8.864,8.00014575 L14.1672619,13.3033009 C14.362524,13.498563 14.362524,13.8151455 14.1672619,14.0104076 C13.9719997,14.2056698 13.6554173,14.2056698 13.4601551,14.0104076 L8.157,8.70714575 L2.85355339,14.0104076 C2.67998704,14.183974 2.41056264,14.2032591 2.2156945,14.0682631 L2.14644661,14.0104076 C1.95118446,13.8151455 1.95118446,13.498563 2.14644661,13.3033009 L2.14644661,13.3033009 L7.45,8.00014575 L2.14644661,2.69669914 C1.95118446,2.501437 1.95118446,2.18485451 2.14644661,1.98959236 C2.34170876,1.79433021 2.65829124,1.79433021 2.85355339,1.98959236 Z"
                                    ></path>
                                  </svg>
                                </SvgIcon>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="promotion-image-remark">
                      <Box className="promotion-image-remark-content">
                        <List>
                          <ListItem sx={{ ...promotionRemarkContentListItem }}>
                            Tải lên hình ảnh 1:1.
                          </ListItem>
                          <ListItem sx={{ ...promotionRemarkContentListItem }}>
                            Ảnh bìa sẽ được hiển thị tại các trang Kết quả tìm
                            kiếm, Gợi ý hôm nay,... Việc sử dụng ảnh bìa đẹp sẽ
                            thu hút thêm lượt truy cập vào sản phẩm của bạn
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                className="product-video-manager edit-row"
                data-product-edit-field-unique-id="video"
                sx={{ ...editRow }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  className="edit-label edit-title"
                  sx={{ ...editLabel, ...editTitle }}
                >
                  <Box sx={{ ...editTitle }}>Video sản phẩm</Box>
                </Stack>
                <Stack className="edit-main" sx={{ ...editMain }}>
                  <Box className="video-manager">
                    <Box className="main">
                      <Box
                        className="shopee-file-upload"
                        // accept="video/mp4"
                      >
                        <Box
                          className="shopee-upload"
                          //   simple="true"
                        >
                          <Box className="shopee-upload-wrapper shopee-upload-dragger">
                            <Input
                              type="file"
                              name="file"
                              // accept="video/mp4"
                              // simple="true"
                              className="shopee-upload__input"
                            />
                            <Box className="upload-icon">
                              <SvgIcon className="shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M13 2a1 1 0 0 1 1 1v7.035a3.538 3.538 0 0 0-1 0V3H2v10h8.035a3.538 3.538 0 0 0 0 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h11Z"></path>
                                  <path d="M6 5.667c0-.481.549-.755.933-.467l3.111 2.333c.312.234.312.7 0 .934L6.934 10.8A.583.583 0 0 1 6 10.333V5.667Zm7 5.833a.5.5 0 0 1 1 0V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14h-1.5a.5.5 0 0 1 0-1H13v-1.5Z"></path>
                                </svg>
                              </SvgIcon>
                            </Box>
                            <Typography className="upload-text">
                              Thêm video
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="video-manager-remark">
                    <Box className="video-manager-remark-content">
                      <List>
                        <ListItem>
                          Kích thước tối đa 30Mb, độ phân giải không vượt quá
                          1280x1280px
                        </ListItem>
                        <ListItem>Độ dài: 10s-60s</ListItem>
                        <ListItem>Định dạng: $MP4</ListItem>
                        <ListItem>
                          Lưu ý: sản phẩm có thể hiển thị trong khi video đang
                          được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý
                          thành công.
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                className="edit-row"
                sx={{
                  ...editRow,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-end"}
                  className="edit-label edit-title"
                  sx={{ ...editLabel, ...editTitle }}
                >
                  <Box className="mandatory" sx={{ ...mandatory }}>
                    <Typography
                      className="mandatory-icon"
                      sx={{ ...mandatoryIcon }}
                    >
                      *
                    </Typography>
                  </Box>
                  <Typography sx={{ ...editTitle, marginRight: "0" }}>
                    Tên sản phẩm
                  </Typography>
                </Stack>
                <Box className="edit-main" sx={{ ...editMain }}>
                  <Box className="popover-wrap" sx={{ ...popoverWrap }}>
                    <Box
                      className="custom-len-calc-input product-edit-form-item"
                      // size="large"
                      // placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật"
                      // data-product-edit-field-unique-id="name"
                    >
                      <Box
                        className="product-edit-form-item-content"
                        sx={{ ...productEditFormItemContent }}
                      >
                        <Box className="shopee-input">
                          <Box className="shopee-input__inner shopee-input__inner--large">
                            <Input
                              type="text"
                              placeholder="Tên sản phẩm + Thương hiệu + Model + Thông số kỹ thuật"
                              // size="large"
                              // resize="none"
                              // rows="2"
                              // minrows="2"
                              // maxlength="Infinity"
                              // restrictiontype="input"
                              // max="Infinity"
                              // min="-Infinity"
                              className="shopee-input__input"
                            />
                            <Box className="shopee-input__suffix">
                              <Typography className="shopee-input__suffix-split"></Typography>
                              0/120
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                className="edit-row is-last-edit-row"
                sx={{
                  ...editRow,
                }}
                // data-auto-scroll-key="shouldAutoSetCategory"
              >
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-end"}
                  sx={{ ...editLabel }}
                  className="edit-label edit-row-left"
                >
                  <Box className="mandatory" sx={{ ...mandatory }}>
                    <Typography
                      className="mandatory-icon"
                      sx={{ ...mandatoryIcon }}
                    >
                      *
                    </Typography>
                  </Box>
                  <Typography sx={{ ...editTitle, marginRight: "0" }}>
                    Ngành hàng
                  </Typography>
                </Stack>
                <Box
                  className="degrade-wrap edit-row-right-full"
                  sx={{ display: "block" }}
                >
                  <Box className="product-category">
                    <Box
                      className="product-category-box"
                      // data-product-edit-field-unique-id="category"
                    >
                      <Box className="product-edit-form-item">
                        <Box
                          className="product-edit-form-item-content"
                          sx={{ ...productEditFormItemContent }}
                        >
                          <Box className="popover-wrap" sx={{ ...popoverWrap }}>
                            <Box className="product-category-box-inner">
                              <Box className="product-category-text">
                                <Typography className="product-category-placeholder">
                                  Chọn ngành hàng
                                </Typography>
                              </Box>
                              <SvgIcon className="product-category-icon shopee-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M13.7698326,4.53553391 L11.6485122,2.41421356 L9.52719188,4.53553391 L11.6485122,6.65685425 L13.7698326,4.53553391 Z M10.9414054,7.36396103 L8.8200851,5.24264069 L2.71213203,11.3505938 L2.5,13.6840461 L4.83345238,13.4719141 L10.9414054,7.36396103 Z M12.355619,1.70710678 L14.4769394,3.82842712 C14.8674636,4.21895142 14.8674636,4.8521164 14.4769394,5.24264069 L5.54055916,14.1790209 C5.37514107,14.344439 5.1569639,14.4466277 4.92398812,14.4678073 L2.59053575,14.6799393 C2.04051912,14.7299408 1.55410831,14.3245985 1.50410679,13.7745819 C1.49863107,13.7143489 1.49863107,13.6537434 1.50410679,13.5935104 L1.71623883,11.260058 C1.73741844,11.0270822 1.83960716,10.8089051 2.00502525,10.643487 L10.9414054,1.70710678 C11.3319297,1.31658249 11.9650947,1.31658249 12.355619,1.70710678 Z"
                                  ></path>
                                </svg>
                              </SvgIcon>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="apply-suggestion-alert"></Box>
                </Box>
              </Stack>
              <Stack
                className="edit-row description-wrap"
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                sx={{
                  ...editRow,
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-end"}
                  className="edit-label edit-title"
                  sx={{ ...editLabel, ...editTitle }}
                >
                  <Box className="mandatory" sx={{ ...mandatory }}>
                    <Typography
                      className="mandatory-icon"
                      sx={{ ...mandatoryIcon }}
                    >
                      *
                    </Typography>
                  </Box>
                  <Typography sx={{ ...editTitle, marginRight: "0" }}>
                    Mô tả sản phẩm
                  </Typography>
                </Stack>
                <Box className="edit-main" sx={{ ...editMain }}>
                  <Box className="product-description">
                    <Typography
                      className="async-component"
                      data-product-edit-field-unique-id="description"
                    >
                      <Box
                        data-ls-upload-cmpt=""
                        className="product-description-editor ls-upload-cmpt-container"
                      >
                        <Box data-ls-upload-cmpt="" className="popover-wrap">
                          <Box
                            data-ls-upload-cmpt=""
                            className="custom-len-calc-input product-edit-form-item"
                            //   autosize=""
                            //   maxrows="26"
                            //   minrows="9"
                          >
                            <Box
                              data-ls-upload-cmpt=""
                              className="product-edit-form-item-content"
                              sx={{ ...productEditFormItemContent }}
                            >
                              <Box
                                className="shopee-input shopee-input__area"
                                data-ls-upload-cmpt=""
                              >
                                <textarea
                                  // type="textarea"
                                  // resize="none"
                                  // rows="2"
                                  // minrows="9"
                                  // maxrows="26"
                                  // autosize="true"
                                  // maxlength="Infinity"
                                  // restrictiontype="input"
                                  // max="Infinity"
                                  // min="-Infinity"
                                  className="shopee-input__inner shopee-input__inner--normal"
                                  style={{
                                    resize: "none",
                                    minHeight: "210px",
                                    height: "210px",
                                  }}
                                ></textarea>
                              </Box>
                              <Box
                                data-ls-upload-cmpt=""
                                className="text-area-label"
                              >
                                <Typography
                                  data-ls-upload-cmpt=""
                                  className="text-area-label-pre"
                                >
                                  0
                                </Typography>
                                <Typography data-ls-upload-cmpt="">
                                  /3000
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Typography>
                    <Box
                      className="banner-generator-container banner-generator"
                      entrance-type="4"
                    >
                      <Box className="image-selector-wrapper">
                        <Box className="shopee-upload">
                          <Box className="shopee-upload-wrapper">
                            <Input
                              type="file"
                              name="file"
                              // accept=".jpg, .jpeg, .png"
                              className="shopee-upload__input"
                            />
                            <Typography></Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BasicInformation;
