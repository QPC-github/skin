export default { title: 'Page Notice/Deprecated' };

export const footer = () => `
<section class="page-notice page-notice--confirmation" role="region" aria-labelledby="confirmation-status">
    <div class="page-notice__header">
        <svg aria-hidden="true" class="icon icon--confirmation-filled" focusable="false" height="24" width="24">
            <use xlink:href="#icon-confirmation-filled"></use>
        </svg>
    </div>
    <div class="page-notice__main">
        <h3 class="page-notice__title page-notice__title--multiline">Your new listing is live:</h3>
        <p><a href="#">Spam and Eggs From the Cow's Perspective</a> (paperback).</p>
    </div>
    <div class="page-notice__footer">
        <button class="btn">Action</button>
    </div>
</section>
`;
