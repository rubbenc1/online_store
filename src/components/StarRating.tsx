import {StarRatingProps} from "../common/interfaces/interfaces";
import {FC} from "react";


const StarRating: FC<StarRatingProps> = ({rating}) =>{

    const renderStars = () =>{
        const star = [];
        const fullStars = Math.floor(rating);
        let hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars <=0.5;

        for (let i = 0; i < 5; i++){
            if (i < fullStars){
                star.push(
                    <span
                        key = {i}
                        style = {{
                            color: 'gold',
                            marginRight: '3px',
                        }}
                    >
                        &#9733;
                    </span>
                );
            } else if(hasHalfStar){
                star.push(
                    <span
                        key={i}
                        style={{
                            color: 'gold',
                            marginRight: '3px'
                            }}
                    >
                         &#9733;
                    </span>
                );
                hasHalfStar = false;
            }else {
                star.push(
                    <span
                        key={i}
                        style={{
                            color: 'gray',
                            marginRight: '3px',
                        }}
                    >
                        &#9734;
                    </span>
                );
            }
        }
        return star;
    };
    return <div>{renderStars()}</div>;

}

export default StarRating;