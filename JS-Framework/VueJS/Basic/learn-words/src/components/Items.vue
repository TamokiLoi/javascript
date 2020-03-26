<template>
    <div class="col-sm-6 col-md-3 col-lg-3" style="margin: 5px 0;">
        <div class="card md-3">
            <div class="card-body items">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .card-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e6e6e;
    }

    .items {
        cursor: pointer;
    }

    .items:hover {
        background-color: #ffe2e2;
    }
</style>