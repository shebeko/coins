CREATE USER javauser IDENTIFIED BY 123456;
GRANT CONNECT TO javauser;
GRANT CREATE TABLE TO javauser;
GRANT  UNLIMITED TABLESPACE TO  javauser;
INSERT INTO "JAVAUSER"."COINS" (ID, UNIT, VALUE, COUNTRY, YEAR, ADDITIONAL_INFO) VALUES ('1', '������', '11', 'US', '2005', 'some_info')