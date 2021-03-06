PGDMP         !                x            gogarmen    12.2    12.2     .           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            /           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            0           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            1           1262    16457    gogarmen    DATABASE     �   CREATE DATABASE gogarmen WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Indonesian_Indonesia.1252' LC_CTYPE = 'Indonesian_Indonesia.1252';
    DROP DATABASE gogarmen;
                postgres    false            �            1259    16476    Branches    TABLE     �   CREATE TABLE public."Branches" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Branches";
       public         heap    postgres    false            �            1259    16474    Branches_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Branches_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Branches_id_seq";
       public          postgres    false    206            2           0    0    Branches_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Branches_id_seq" OWNED BY public."Branches".id;
          public          postgres    false    205            �            1259    16492    Movies    TABLE       CREATE TABLE public."Movies" (
    id integer NOT NULL,
    name character varying(255),
    "minutesLength" integer,
    picture character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Movies";
       public         heap    postgres    false            �            1259    16490    Movies_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Movies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Movies_id_seq";
       public          postgres    false    210            3           0    0    Movies_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Movies_id_seq" OWNED BY public."Movies".id;
          public          postgres    false    209            �            1259    16458    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    16484    Studios    TABLE     P  CREATE TABLE public."Studios" (
    id integer NOT NULL,
    name character varying(255),
    "BranchId" integer,
    "basicPrice" integer,
    "addFridayPrice" integer,
    "addSaturdayPrice" integer,
    "addSundayPrice" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Studios";
       public         heap    postgres    false            �            1259    16482    Studios_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Studios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Studios_id_seq";
       public          postgres    false    208            4           0    0    Studios_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Studios_id_seq" OWNED BY public."Studios".id;
          public          postgres    false    207            �            1259    16465    Users    TABLE     
  CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    role character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16463    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    204            5           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    203            �
           2604    16479    Branches id    DEFAULT     n   ALTER TABLE ONLY public."Branches" ALTER COLUMN id SET DEFAULT nextval('public."Branches_id_seq"'::regclass);
 <   ALTER TABLE public."Branches" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    206    206            �
           2604    16495 	   Movies id    DEFAULT     j   ALTER TABLE ONLY public."Movies" ALTER COLUMN id SET DEFAULT nextval('public."Movies_id_seq"'::regclass);
 :   ALTER TABLE public."Movies" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �
           2604    16487 
   Studios id    DEFAULT     l   ALTER TABLE ONLY public."Studios" ALTER COLUMN id SET DEFAULT nextval('public."Studios_id_seq"'::regclass);
 ;   ALTER TABLE public."Studios" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    208    208            �
           2604    16468    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    204    204            �
           2606    16481    Branches Branches_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Branches"
    ADD CONSTRAINT "Branches_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Branches" DROP CONSTRAINT "Branches_pkey";
       public            postgres    false    206            �
           2606    16500    Movies Movies_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Movies"
    ADD CONSTRAINT "Movies_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Movies" DROP CONSTRAINT "Movies_pkey";
       public            postgres    false    210            �
           2606    16462     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    202            �
           2606    16489    Studios Studios_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Studios"
    ADD CONSTRAINT "Studios_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Studios" DROP CONSTRAINT "Studios_pkey";
       public            postgres    false    208            �
           2606    16473    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    204           