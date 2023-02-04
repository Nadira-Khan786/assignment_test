import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../constants/constants";
import { Grid, Button } from "@mui/material";
import "./HomeContent.scss";
const HomeContent = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fatchData();
  }, []);
  const fatchData = async () => {
    try {
      await axios
        .get(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-01-04&sortBy=publishedAt&apiKey=${API_KEY}`
        )
        .then((res) => {
          setData(res?.data?.articles);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="Home-ctn">
      <Grid container spacing={4}>
        <Grid item md={8} xs={12} sm={12}>
          <div className="left-ctn">
            {data?.map((item, index) => {
              return (
                <div className="item">
                  <div className="title">{item.title}</div>
                  <div className="item-ctn">
                    <a href={item.url} target="_blank">
                      <img src={item.urlToImage} className="img-ctn" />
                    </a>
                    <p key={index} className="content">
                      {item.content}
                    </p>

                    <p key={index} className="content">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <div className="right-ctn">
            {data?.map((item, index) => {
              return (
                <div className="card">
                  <div className="card_image">
                    <img src="https://picsum.photos/500/300/?image=10" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{item.title}</h2>
                    <p className="card_text">
                      Demo of pixel perfect pure CSS simple responsive card grid
                      layout
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContent;
