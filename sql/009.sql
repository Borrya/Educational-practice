USE photo_portal;
SELECT (SELECT NAME FROM user WHERE USER_ID = photo_post.USER_ID) AS 'Name',DESCRIPTION, CREATION_DATE FROM photo_post 
WHERE LENGTH(DESCRIPTION) > 20;