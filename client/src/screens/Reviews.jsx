import React from "react";
import StarRatings from 'react-star-ratings'
import styled from "styled-components";

const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
  text-size: 22px;
`
const UserReview = styled.div`
display: flex;
flex-direction: row;
margin: 5px;

`
const Paragraph = styled.div`
display: flex;
margin: px 
padding: 2px;
`

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <ReviewCard key={index}> 
      <UserReview> 
      <StarRatings rating={review.rating} starRatedColor="black"
          starDimension="25px" starSpacing="0px" />&nbsp;
        <strong>{review.title}</strong> 
     </UserReview>
      <Paragraph>{review.author}   {review.location}</Paragraph>      
      <Paragraph>{review.description}</Paragraph>
    </ReviewCard>
  ));

  return <ReviewCard>{reviewsJSX}</ReviewCard>;

};

export default Reviews;
