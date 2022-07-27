package com.ssafy.aejimeongji.domain.exception;

public class ExpireAuthNumberException extends RuntimeException {

    public ExpireAuthNumberException() {
        super("휴대폰 인증 기한이 만료되었습니다.");
    }

    public ExpireAuthNumberException(String message) {
        super(message);
    }

    public ExpireAuthNumberException(String message, Throwable cause) {
        super(message, cause);
    }

    public ExpireAuthNumberException(Throwable cause) {
        super(cause);
    }
}
