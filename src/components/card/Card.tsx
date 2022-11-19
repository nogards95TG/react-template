import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { CardMedia } from "@mui/material";
import "./Card.scss";

type TCard = {
  title: string;
  subtitle?: string;
  text: string;
  buttonLabel: string;
  width?: number;
  height?: number;
  img?: {
    name: string;
    alt: string;
  };
};

const ICard: FC<TCard> = ({
  title,
  subtitle,
  text,
  buttonLabel,
  width,
  height = 180,
  img,
}) => {
  const { name: imgName, alt } = img || {};
  const buttonCta = () => {
    //Implement CTA here
    console.log("call to action");
  };

  return (
    <Box
      style={{
        width: width ? `${width}rem` : "16rem",
        position: 'relative'
      }}
      className='m-2'
    >
      <Card>
        {img ? (
          <CardMedia
            component="img"
            height={`${height}`}
            alt={alt}
            src={require(`../../assets/${imgName}`)}
          />
        ) : null}
        <React.Fragment>
          <CardContent className="black-layer">
            <Typography variant="h5">{title}</Typography>
            {subtitle ? (
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {subtitle}
              </Typography>
            ) : null}
            <Typography>{text}</Typography>
            <CardActions>
              <Button onClick={buttonCta} size="small">
                {buttonLabel}
              </Button>
            </CardActions>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default ICard;
