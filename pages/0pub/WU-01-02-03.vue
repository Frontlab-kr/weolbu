<template>
    <div class="login">
        <h1>회원가입</h1>
        <div class="join-step01">
            <div class="p-fluid">
                <div class="formgrid grid">
                    <div class="field col">
                        <label>이름 </label>
                        <InputText type="text" class="p-invalid" />
                        <p class="text-danger">한글이나 영문으로 입력 바랍니다.</p>
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <label>Email </label>
                        <span class="p-input-icon-left">
                            <i class="bi bi-envelope" />
                            <InputText />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="login__btn">
            <Button label="취소" severity="secondary" outlined />
            <Button label="다음" />
        </div>
    </div>
</template>
