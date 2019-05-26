USE photo_portal;
SELECT NAME FROM user 
WHERE (SELECT COUNT(*) FROM photo_post WHERE user.USER_ID = USER_ID) > 3;