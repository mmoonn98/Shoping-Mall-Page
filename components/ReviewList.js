Vue.component('review-list', {
    // 리뷰를 배열채로 들고와서 안에서 v-for
    props : ['reviews'],
    template : `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <!-- v-for를 이용하여 리뷰(객체)의 값들을 사용 -->
            <li v-for="review in reviews" >
            {{ review.name }} 님이 {{ review.rating }} 별점을 주었습니다
            <br/>
            "{{ review.review }}"
            <br/>

            추천: {{ review.recommend }}

            </li>
        </ul>
    </div>
    `
})