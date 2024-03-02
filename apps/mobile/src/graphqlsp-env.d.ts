/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "RootQueryType"
    },
    "mutationType": {
      "name": "RootMutationType"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "RootMutationType",
        "fields": [
          {
            "name": "login",
            "type": {
              "kind": "OBJECT",
              "name": "AuthSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "username",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "password",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "register",
            "type": {
              "kind": "OBJECT",
              "name": "AuthSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "passwordOne",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "passwordTwo",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "refreshToken",
            "type": {
              "kind": "OBJECT",
              "name": "RefreshTokenSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "refreshToken",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "CreateRecipeSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "serveTime",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              },
              {
                "name": "categoryId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "nutritionFacts",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cookingSteps",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CookingStepInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "recipeImages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "RecipeImageInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "ingredients",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "IngredientInput",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "updateRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "CreateRecipeSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "categoryId",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "serveTime",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              },
              {
                "name": "nutritionFacts",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "updateRecipeImages",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateRecipeImagesSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "recipeImages",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "RecipeImageInput",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "updateRecipeIngredients",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateRecipeIngredientsSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "ingredients",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "IngredientInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateRecipeCookingSteps",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateRecipeCookingStepsSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "cookingSteps",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CookingStepInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "likeRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "LikeRecipeSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "recipeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createCategory",
            "type": {
              "kind": "OBJECT",
              "name": "CreateCategorySuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "title",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "saveRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "SaveRecipeSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "recipeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "categoryId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "followUser",
            "type": {
              "kind": "OBJECT",
              "name": "FollowUserSuccess",
              "ofType": null
            },
            "args": [
              {
                "name": "followingId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "RootQueryType",
        "fields": [
          {
            "name": "users",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "getUserInfo",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "getRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "Recipe",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "categories",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Category",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "IngredientInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Upload",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CookingStepInput",
        "inputFields": [
          {
            "name": "step",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "video",
            "type": {
              "kind": "SCALAR",
              "name": "Upload",
              "ofType": null
            }
          },
          {
            "name": "videoTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RecipeImageInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Upload",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateRecipeSuccess",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "serveTime",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "categoryId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nutritionFacts",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateRecipeIngredientsSuccess",
        "fields": [
          {
            "name": "ingredients",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ingredient",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateRecipeCookingStepsSuccess",
        "fields": [
          {
            "name": "cookingSteps",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "CookingStep",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateRecipeImagesSuccess",
        "fields": [
          {
            "name": "recipeImages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecipeImage",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LikeRecipeSuccess",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateCategorySuccess",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SaveRecipeSuccess",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "recipeId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "categoryId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Ingredient",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "imageUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecipeImage",
        "fields": [
          {
            "name": "imageUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CookingStep",
        "fields": [
          {
            "name": "step",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "videoTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "videoUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Recipe",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "serveTime",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "categoryId",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nutritionFacts",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ingredients",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ingredient",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "cookingSteps",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "CookingStep",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "recipeImages",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecipeImage",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Category",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Upload"
      },
      {
        "kind": "OBJECT",
        "name": "RefreshTokenSuccess",
        "fields": [
          {
            "name": "accessToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "refreshToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "exp",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AuthSuccess",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "accessToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "refreshToken",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "exp",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "age",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FollowUserSuccess",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}