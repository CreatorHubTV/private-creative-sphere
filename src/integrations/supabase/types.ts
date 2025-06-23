export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      content: {
        Row: {
          created_at: string | null
          creator_id: string | null
          description: string | null
          duration: number | null
          id: string
          is_premium: boolean | null
          media_url: string
          thumbnail_url: string | null
          title: string | null
          type: string
        }
        Insert: {
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          is_premium?: boolean | null
          media_url: string
          thumbnail_url?: string | null
          title?: string | null
          type: string
        }
        Update: {
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          is_premium?: boolean | null
          media_url?: string
          thumbnail_url?: string | null
          title?: string | null
          type?: string
        }
        Relationships: []
      }
      creators: {
        Row: {
          avatar_url: string
          banner_url: string
          bio: string
          created_at: string
          id: string
          price: number
          username: string
        }
        Insert: {
          avatar_url: string
          banner_url: string
          bio?: string
          created_at: string
          id?: string
          price: number
          username?: string
        }
        Update: {
          avatar_url?: string
          banner_url?: string
          bio?: string
          created_at?: string
          id?: string
          price?: number
          username?: string
        }
        Relationships: []
      }
      delivery_addresses: {
        Row: {
          city: string
          complement: string | null
          created_at: string | null
          id: string
          is_default: boolean | null
          neighborhood: string
          number: string
          state: string
          street: string
          user_id: string
          zip_code: string
        }
        Insert: {
          city?: string
          complement?: string | null
          created_at?: string | null
          id?: string
          is_default?: boolean | null
          neighborhood: string
          number: string
          state?: string
          street: string
          user_id: string
          zip_code: string
        }
        Update: {
          city?: string
          complement?: string | null
          created_at?: string | null
          id?: string
          is_default?: boolean | null
          neighborhood?: string
          number?: string
          state?: string
          street?: string
          user_id?: string
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          created_at: string | null
          creator_id: string | null
          donor_id: string | null
          id: string
          message: string | null
          status: string | null
          stripe_payment_intent_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          creator_id?: string | null
          donor_id?: string | null
          id?: string
          message?: string | null
          status?: string | null
          stripe_payment_intent_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          creator_id?: string | null
          donor_id?: string | null
          id?: string
          message?: string | null
          status?: string | null
          stripe_payment_intent_id?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string | null
          creator_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          creator_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          creator_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      follows: {
        Row: {
          created_at: string | null
          follower_id: string | null
          following_id: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          follower_id?: string | null
          following_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          follower_id?: string | null
          following_id?: string | null
          id?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          content_id: string | null
          created_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          content_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          content_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "content"
            referencedColumns: ["id"]
          },
        ]
      }
      live_streams: {
        Row: {
          created_at: string | null
          creator_id: string | null
          description: string | null
          ended_at: string | null
          id: string
          started_at: string | null
          status: string | null
          stream_key: string | null
          title: string
          viewer_count: number | null
        }
        Insert: {
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          ended_at?: string | null
          id?: string
          started_at?: string | null
          status?: string | null
          stream_key?: string | null
          title: string
          viewer_count?: number | null
        }
        Update: {
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          ended_at?: string | null
          id?: string
          started_at?: string | null
          status?: string | null
          stream_key?: string | null
          title?: string
          viewer_count?: number | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          message_type: string | null
          read_at: string | null
          receiver_id: string | null
          sender_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          message_type?: string | null
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          message_type?: string | null
          read_at?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          menu_item_id: number
          menu_item_name: string
          menu_item_price: number
          notes: string | null
          order_id: string
          quantity: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          menu_item_id: number
          menu_item_name: string
          menu_item_price: number
          notes?: string | null
          order_id: string
          quantity: number
        }
        Update: {
          created_at?: string | null
          id?: string
          menu_item_id?: number
          menu_item_name?: string
          menu_item_price?: number
          notes?: string | null
          order_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          delivery_address_id: string | null
          id: string
          notes: string | null
          payment_method: string | null
          payment_status: string | null
          status: string
          stripe_payment_intent_id: string | null
          total_amount: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          delivery_address_id?: string | null
          id?: string
          notes?: string | null
          payment_method?: string | null
          payment_status?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          total_amount: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          delivery_address_id?: string | null
          id?: string
          notes?: string | null
          payment_method?: string | null
          payment_status?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          total_amount?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_delivery_address_id_fkey"
            columns: ["delivery_address_id"]
            isOneToOne: false
            referencedRelation: "delivery_addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          banner_url: string | null
          bio: string | null
          created_at: string | null
          full_name: string | null
          id: string
          is_creator: boolean | null
          phone: string | null
          stripe_account_id: string | null
          subscription_price: number | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          banner_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          is_creator?: boolean | null
          phone?: string | null
          stripe_account_id?: string | null
          subscription_price?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          banner_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          is_creator?: boolean | null
          phone?: string | null
          stripe_account_id?: string | null
          subscription_price?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string | null
          creator_id: string | null
          expires_at: string | null
          id: string
          price: number | null
          status: string | null
          stripe_subscription_id: string | null
          subscriber_id: string | null
        }
        Insert: {
          created_at?: string | null
          creator_id?: string | null
          expires_at?: string | null
          id?: string
          price?: number | null
          status?: string | null
          stripe_subscription_id?: string | null
          subscriber_id?: string | null
        }
        Update: {
          created_at?: string | null
          creator_id?: string | null
          expires_at?: string | null
          id?: string
          price?: number | null
          status?: string | null
          stripe_subscription_id?: string | null
          subscriber_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
