import React from "react";
import { Grid, Typography } from "@mui/material";

import "./Footer.css";

export default function Footer() {
  return (
    <div
      style={{
        width: " 100%",
        height: "600px",
        background: " #fff",
        position: " absolute",
        bottom: "0",
        left: "0",
        padding: " 56px 80px 32px",
        position: " relative",
        // zIndex:"-1",
      }}
    >
      <Grid container>
        <Grid item sm={12} lg={12}>
          <Typography
            id="logo"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
              fontSize: "40px",
            }}
          >
            CTax
          </Typography>
          <hr />
        </Grid>
        <Grid
          container
          columnGap={2}
          margin="auto"
          sx={{
            marginTop: "1rem",
            textAlign: "start",
            // margin: " 1rem  auto !important ",
            justifyContent: "space-between",
          }}
        >
          <Grid item md={2}>
            <h3> BUSINESS REGISTRATION</h3>
            <ul className="footer_quick_links_wrapper">
              <li>Private Limited Company</li>
              <li>Limited Liability Partnership</li>
              <li>One Person Company</li>
              <li>Proprietorship Firm</li>
              <li>TRADEMARK & COPYRIGHT</li>
            </ul>
          </Grid>
          <Grid item md={2}>
            <h3>Trademark </h3>
            <ul className="footer_quick_links_wrapper">
              <li>Trademark Registration</li>
              <li>Trademark Objection</li>
              <li>Trademark Assignment</li>
              <li>Trademark Renewal</li>

              <li>Copyright Registration</li>
            </ul>
          </Grid>

          <Grid item md={2}>
            <h3>LEGAL DOCUMENTATION</h3>
            <ul className="footer_quick_links_wrapper">
              <li>Founders Agreement</li>
              <li>Term Sheet</li>
              <li>Shareholders Agreement</li>
              <li>Share Purchase Agreement</li>
            </ul>
          </Grid>

          <Grid item md={2}>
            <h3>LEGAL DOCUMENTATION</h3>
            <ul className="footer_quick_links_wrapper">
              <li>Founders Agreement</li>
              <li>Term Sheet</li>
              <li>Shareholders Agreement</li>
              <li>Share Purchase Agreement</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <hr />
      <Grid container></Grid>
      <Grid container>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: " 400",
            fontSize: " 12px",
            lineHeight: " 12px",
            marginTop: "10px",
          }}
        >
          © 2023 CTax, All Rights Reserved. 
        </Typography>
      </Grid>
    </div>
  );
}
