Vue.component('review-form',{
        data : function () {
        return {
            // 리뷰에서 가져올 값
            name : '',
            review : "",
            rating : null, // 빈값으로 두기위해 null사용
            recommend : null // 기본값을 사용하고싶다면 option값을 넣어도 OK
        }
    },
    methods : {
        onSubmit : function () {
            // 리뷰에 작성된 값을 객체로 만듦
            let productReview = {
                name :this.name,
                review : this.review,
                rating : this.rating,
                recommend : this.recommend
            }
            // emit을 이용하여 사용자 이벤트를 만들어서 인자(객체)와 함께 전달
            // emit으로 만든 이벤트의 이름은 -(하이픈)으로 연결 : HTML이 인식
            this.$emit('submit-review', productReview)
        }
    },

    template : `
    <form class="review-form" v-on:submit.prevent="onSubmit">
        <h3>리뷰를 남기세요</h3>
        <label for="name">이름:</label>
        <input v-model="name">
    
        <label for="review">리뷰:</label>      
        <textarea v-model="review"></textarea>
    
        <label for="rating">별점</label>
        <select v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
    
        <label for="recommend">이 물건을 추천하나요?</label>
        <select v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>

        <input class="button" type="submit" value="Submit">      
    </form>
    `
})